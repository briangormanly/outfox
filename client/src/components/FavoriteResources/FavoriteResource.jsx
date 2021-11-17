import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import {
  Header,
  ButtonContainer,
} from "../DashboardGroups/DashboardGroups.elements";
import {
  ResourcesContainer,
  ResourceList,
} from "./FavoriteResource.elements";

import { Modal, AddResourceForm, FavResourceCard } from "../index";

function FavoriteResource({ dashboardPaginate }) {
  const [showModal, setShowModal] = useState(false);
  const [favRecs, setFavRecs] = useState([]);
   const [loaded, setLoaded] = useState(false);
  const { user } = useSelector((state) => state.userDetail);
  const { id, Resources } = user;

  const history = useHistory();
  const params = useParams();

  const handleViewAll = () => {
    dashboardPaginate({ type: "resources" });
    history.push(`/user/${params.id}/favresources`);
  };

  useEffect(() => {
    if(!loaded){
      makeCall();
      setLoaded(true);
    }  
  }, [loaded]);



  const makeCall = async ()=>{
    const frcs = await axios.get("http://localhost:8080/api/groups/favrecs/"+params.id);
    setFavRecs(frcs.data);
  }


  return (
    <React.Fragment>
      {showModal && (
        <Modal large setShowModal={setShowModal}>
          <AddResourceForm creatorid={id} setShowModal={setShowModal} />
        </Modal>
      )}
      <Header>

        <ButtonContainer>
          <button onClick={() => setShowModal(true)}>
            <span>Create Resource</span> <FaPlus />
          </button>
          <button onClick={handleViewAll}>
            <span>View All</span>
            <FaArrowRight />
          </button>
        </ButtonContainer>
      </Header>
      <ResourceList>
        {favRecs && favRecs.filter((resource, indx) => indx < 5).map((resource) => (
          <FavResourceCard small showSVG key={resource.id} {...resource} />
        ))}
      </ResourceList>
    </React.Fragment>
  );
}

export default FavoriteResource;