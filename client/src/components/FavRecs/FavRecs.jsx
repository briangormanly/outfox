import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ResourceCard } from "../index";
import { ResourceContainer } from "./FavRecs.elements";
import axios from "axios";
import axFactoryService from "../../services/axFactory";
const Resources = () => {
  const { user } = useSelector((state) => state.userDetail);
  //const { Resources } = user;
  const [loaded, setLoaded] = useState(false);
  const [favRecs, setFavRecs] = useState([]);
  useEffect(() => {
    if (!loaded) {
      makeCall();
      setLoaded(true);
    }
  }, [loaded]);

  const makeCall = async () => {
    let ax = axFactoryService.genAx();
    const frcs = await ax.get("/api/groups/favrecs/" + user.id);
    setFavRecs(frcs.data);
  };
  return (
    <ResourceContainer>
      {favRecs.map((resource) => (
        <ResourceCard
          key={resource.id}
          {...resource}
          //showButtons
          showType
          // showDates
          showDescription
        />
      ))}
    </ResourceContainer>
  );
};

export default Resources;