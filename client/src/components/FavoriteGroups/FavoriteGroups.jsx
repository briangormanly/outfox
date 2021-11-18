import React, { useRef, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { FavGroupCard } from "../index";

import {
  GroupsContainer,
  CardContainer,
  NoGroupsContainer,
  RemFavBtn,
} from "./FavoriteGroups.elements";
import { Link } from "../../styles";
import { useParams } from "react-router-dom";
import axios from "axios";

const FavoriteGroups = () => {
  const locationParams = useParams();
  const [favGroups,setFavGroups] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const Uparams = useParams();
  const { user } = useSelector((state) => state.userDetail);
  const { id, Resources } = user;
	//const currentUserId = parseFloat(Uparams.id);
  useEffect(() => {
    if(!loaded){
      makeCall();
      setLoaded(true);
    }  
  }, [loaded]);


  const makeCall = async ()=>{
    const fGrps = await axios.get("http://localhost:8080/api/groups/favgroups/"+locationParams.id);
    setFavGroups(fGrps.data);
  }

  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };


  
  const userURL = `/user/${locationParams.id}`;
  return (
    <GroupsContainer>
      {favGroups != []  ? (
        <CardContainer ref={scrollRef} onWheel={onWheel}>
          {favGroups.map((group) => (
           
            <FavGroupCard
              key={group.id}
              id={group.id}
              name={group.groupname}
              description={group.groupdescription}
            />
    
          ))}
        </CardContainer>
      ) : (
        <NoGroupsContainer>
          <p> You do not have any groups</p>
          <button>
            <Link to={`${userURL}/groups`}> Create Group</Link>{" "}
          </button>
        </NoGroupsContainer>
      )}
    </GroupsContainer>
  );
};
// this is a comment
export default FavoriteGroups;
