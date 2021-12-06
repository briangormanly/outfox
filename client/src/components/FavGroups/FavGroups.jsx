import React, { Fragment, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import groupService from "../../services/groups";
import { CardContainer } from "../FavoriteGroups/FavoriteGroups.elements";
import { FavGroupCard } from "../index";
import { Link } from "../../styles";
import axios from "axios";
import { CreateGroupForm, GroupAllCard, Modal } from "../index";
import {
  GroupContainer,
  Content,
  InnerContainer,
  TitleContainer,
  NoGroupsContainer,
  VerticalLine,
} from "./FavGroups.elements";
import axFactoryService from "../../services/axFactory";
import { FaRegFolderOpen } from "react-icons/fa";

const FavGroups = ({ name, description, id }) => {
  const { user } = useSelector((state) => state.userDetail);
  //const { Groups } = user;
  const locationParams = useParams();
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [favGroups, setFavGroups] = useState([]);
  const params = useParams();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!loaded) {
      makeCall();
      setLoaded(true);
    }
  }, [loaded]);

  const makeCall = async () => {
    let ax = axFactoryService.genAx();
    const fGrps = await ax.get("/api/groups/favgroups/" + params.id);
    setFavGroups(fGrps.data);
  };
  const scrollRef = useRef(null);
  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };
  const removeFavorite = async () => {
    console.log("doing stuff to group" + id);
    const resp = await groupService.remFavoriteGroup(params.id, id);
    setVisible(false);
  };

  const userURL = `/user/${locationParams.id}`;

  return (
    <Fragment>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateGroupForm setShowModal={setShowModal} />
        </Modal>
      )}
      <GroupContainer>
        {favGroups != [] ? (
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
      </GroupContainer>
    </Fragment>
  );
};

export default FavGroups;
