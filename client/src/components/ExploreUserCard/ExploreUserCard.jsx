import axios from "axios";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { FaUser } from "react-icons/fa";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ExploreUser } from "../index";
import { Friend } from "../index";

import friendService from "../../services/friends";
import axFactoryService from "../../services/axFactory";
import {
  ExploreCard,
  Content,
  ButtonGroup,
  Text,
  IconContainer,
  Button,
  SubRow,
  Headline,
  FRecBlk,
} from "./ExploreUserCard.elements";

const ExploreUserCard = (props) => {
  const { firstname, lastname, username, id, tags, country, city, email } =
    props;
  const history = useHistory();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [added, setFriendAdded] = useState(false);
  const [requested, setReq] = useState(false);
  const Uparams = useParams();
  const currentUserId = parseFloat(Uparams.id);
  let ax = axFactoryService.genAx();

  const addFriend = () => {
    setReq(true);
    const fAdd = added;
    setFriendAdded(!fAdd);
  };

  async function friendAdder() {
    const url =
      "/api/friends" + `/makeFriend/${currentUserId}/${id}`;
    // need to pass the sendFriendRequest function the user object
    const response = await ax.get(url);
    friendService.sendFriendRequest(response.data);
  }

  useEffect(() => {
    if (requested) {
      friendAdder();
      setReq(false);
    }
  }, [requested]);

  const AddedFriendPopUp = () => {
    console.log("do some stuff");
    return (
      <FRecBlk>
        <h5>You Sent a Friend Request To:</h5>
        <span>
          <h2>{`${firstname} ${lastname}`}</h2>
          <h4>
            <i>{`${username}`}</i>
          </h4>
        </span>
        <button onClick={addFriend}>close</button>
      </FRecBlk>
    );
  };

  const ExpUserExpanded = () => {
    return (
      <SubRow>
        <span>
          <h2>{`${firstname} ${lastname}`}</h2>
          <h4>
            <i>{`${username}`}</i>
          </h4>
        </span>
        <h5>Related Tags</h5>
        <ul>
        {tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
			</ul>
        <p>{"Location: " + city + ", " + country}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <button onClick={toggleExpand}>close</button>
      </SubRow>
    );
  };

  const toggleExpand = () => {
    const tExp = expanded;
    setExpanded(!tExp);
  };
  return (
    <ExploreCard>
      <Headline>
        <Content>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <Text>
            <h2>{`${firstname} ${lastname}`}</h2>
            <p>{`${username}`}</p>
          </Text>
        </Content>

        <Text>
          <h3>Related Tags</h3>
          <ul>
          {tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
				
			</ul>
        </Text>
        <ButtonGroup>
          <Button edit onClick={addFriend}>
            Add Friend
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button edit onClick={toggleExpand}>
            More Info
          </Button>
        </ButtonGroup>
      </Headline>
      <br />
      {expanded && <ExpUserExpanded />}
      {added && <AddedFriendPopUp />}
    </ExploreCard>
  );
};

export default ExploreUserCard;
