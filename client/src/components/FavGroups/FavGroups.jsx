import React, { Fragment, useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { CreateGroupForm, GroupAllCard, Modal } from "../index";
import {
  GroupContainer,
  Content,
  InnerContainer,
  TitleContainer,
  NoGroupsContainer,
  VerticalLine,
} from "./FavGroups.elements";
import { FaRegFolderOpen } from "react-icons/fa";

const FavGroups = () => {
  const { user } = useSelector((state) => state.userDetail);
  //const { Groups } = user;

  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [favGroups, setFavGroups] = useState([]);
  useEffect(() => {
    if(!loaded){
      makeCall();
      setLoaded(true);
    }  
  }, [loaded]);


  const makeCall = async ()=>{
    const fGrps = await axios.get("http://localhost:8080/api/groups/favgroups/"+user.id);
    setFavGroups(fGrps.data);
  }









  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateGroupForm setShowModal={setShowModal} />
        </Modal>
      )}
      <GroupContainer>
        <button onClick={() => setShowModal(true)}> Create Group </button>
        <TitleContainer>
          <h1>My Groups</h1>
          <InnerContainer>
           
                <Content>
                {favGroups != [] ?(
              favGroups.map((group) => (
                <GroupAllCard key={group.id} {...group} />
              ))
            ) :
               (
                <NoGroupsContainer>
                  <FaRegFolderOpen />
                  <VerticalLine />
                  <p> You do not have any groups</p>
                  <button onClick={() => setShowModal(true)}>
                    Create Group
                  </button>
                </NoGroupsContainer>
              )}
            </Content>

          </InnerContainer>
        </TitleContainer>
      </GroupContainer>
    </Fragment>
  );
};

export default FavGroups;
