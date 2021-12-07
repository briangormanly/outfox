import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import userService from "../../services/users";
import groupService from "../../services/groups";

import Loader from "../Loader/Loader";
import {
  ExploreContainer,
  UserContainer,
  HeadButtonGroup,
  UserSelectBtn,
  GroupSelectBtn,
  ResSelectBtn,
  PageSelector,
} from "./Explore.elements";

import { ExploreUserCard } from "../index";
import { ExploreGroupCard } from "../index";
import { ExploreResourceCard } from "../index";
import axFactoryService from "../../services/axFactory";
// import {ExploreGroupCard} from '../index';
// import { ExploreGroup } from '../index';
// import { ExploreGroups } from '../index';

// parent functions
// when you click on explore...

// Part III --> Sam
// take each record from the second array and turn it into a component

// Part IV --> Andy
// render() the component
// call the page which makes the component (another loop), returning the object

async function getPages(userId) {
  // number of pages for recommendations is stored, so we can say "we have 7 pages we can go through"
  let ax = axFactoryService.genAx();
  const usersNURL = "/api/explore/userspgn/" + userId;
  const usersResponse = await axios.get(usersNURL);
  return usersResponse;
}

// Part II --> Roxy
// make the second API call and pass the userid and page 1 to get user records
async function aiCall(id, page, type) {
  let url = "";
  //let ax = axios;
  //ax.defaults.baseURL = "http://10.10.9.131:8080";
  let ax = axFactoryService.genAx();
  switch (type) {
    case "user":
      url = "/api/explore/users/" + id + "/" + page;
      break;
    case "group":
      url = "/api/explore/groups/" + id + "/" + page;
      break;
    case "resource":
      url = "/api/explore/resources/" + id + "/" + page;
      break;
  }

  // loop through every single record, and do getUsers() with the userids, return json array
  const response = await ax.get(url);
  
  return response;
}

var getBaseUrl = () => {
  // custom base URL logic examples:
  // - to request a current URL without the search parameters part:
  let baseUrl = window.location.href.slice(0, -window.location.search.length);

  //// or to insert '/api' after the host part
  //let baseUrl = window.location.host + '/api' + window.location.pathname;

  // ensure slash at the end
  if (baseUrl[baseUrl.length - 1] != "/") baseUrl = baseUrl + "/";

  return baseUrl;
};

const Explore = (props) => {
  const Uparams = useParams();
  const currentUserId = parseFloat(Uparams.id);
  const [expRecords, setExpRecords] = useState([]);
  const [setUp, setSetUp] = useState(false);
  const [pgn, setPg] = useState(0);
  const [expType, setExpType] = useState("user");
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageMax,setPgMax] = useState(1); // this will be a state variable in the future

  const startUserReload = () => {
    setLoading(true);
    setExpType("user");
    setSetUp(false);
  };

  const startGroupReload = () => {
    setLoading(true);
    setExpType("group");
    setSetUp(false);
  };

  const startResourceReload = () => {
    setLoading(true);
    setExpType("resource");
    setSetUp(false);
  };

  const setExpData = async (userId, pageNumber) => {
    setLoading(true);
    setExpRecords([]);
    switch (expType) {
      case "user":
        const userData = await aiCall(userId, pageNumber, "user");
        var resJsonRaw = userData.data;
        var resJson = resJsonRaw.users;
        setPgMax((parseInt(resJsonRaw.pgcount)-1));
        console.log("response was: " + JSON.stringify(resJson));
        // if(resJson.stringify() == ""){
        // 	setExpRecords({"error": "noData"});
        // 	break;
        // }
        for (var record of resJson) {
          const userDat = await userService.getUser(parseInt(record.id));
          record.firstname = userDat.firstname;
          record.lastname = userDat.lastname;
          record.email = userDat.email;
          record.city = userDat.city;
          record.country = userDat.country;
          record.username = userDat.username;
          record.hashedpw = "REDACTED";
          record.myid = currentUserId;
        }
        setExpRecords(resJson);
        break;
      case "group":
        const groupData = await aiCall(userId, pageNumber, "group");
        var resJsonRaw = groupData.data;
        var resJson = resJsonRaw.groups;
        setPgMax((parseInt(resJsonRaw.pgcount)-1));
        console.log("response was: " + JSON.stringify(resJson));
        // if(resJson.stringify() == ""){
        // 	setExpRecords({"error": "noData"});
        // 	break;
        // }
        for (var record of resJson) {
          const groupDat = await groupService.getGroupData(parseInt(record.id));
          record.groupname = groupDat.groupname;
          record.datetimeadd = groupDat.datetimeadd;
          record.groupdescription = groupDat.groupdescription;
          const creator = await userService.getUser(groupDat.createdby);
          record.creator = creator.firstname + " " + creator.lastname;
          record.city = creator.city;
          record.country = creator.country;
          record.email = creator.email;
          record.myid = currentUserId;
        }
        setExpRecords(resJson);
        break;
      case "resource":
        const resourceData = await aiCall(userId, pageNumber, "resource");
        var resJsonRaw = resourceData.data;
        var resJson = resJsonRaw.resources;
        setPgMax((parseInt(resJsonRaw.pgcount)-1));
        console.log("response was: " + JSON.stringify(resJson));
        // if(resJson.stringify() == ""){
        // 	setExpRecords({"error": "noData"});
        // 	break;
        // }
        for (var record of resJson) {
          const resourceDat = await groupService.getResourceData(
            parseInt(record.id)
          );
          record.title = resourceDat.title;
          record.type = resourceDat.type;
          record.createdAt = resourceDat.createdAt;
          record.updatedAt = resourceDat.updatedAt;
          record.description = resourceDat.description;
          const creator = await userService.getUser(resourceDat.creatorid);
          record.creator = creator.firstname + " " + creator.lastname;
          record.city = creator.city;
          record.country = creator.country;
          record.email = creator.email;
          record.myid = currentUserId;
        }
        setExpRecords(resJson);
        break;
    }
    //setLoading(false);
  };

  useEffect(() => {
    if (!setUp) {
      //here is where the call to get the number of pages would be
      setExpRecords([]);
      setLoading(true);
      switch (expType) {
        case "user":
          setExpData(currentUserId, 0);
          setSetUp(true);
          break;
        case "group":
          setExpData(currentUserId, 0);
          setSetUp(true);
          break;
        case "resource":
          setExpData(currentUserId, 0);
          setSetUp(true);
          break;
      }
      setPg(0);
      setLoading(false);
    }
  }, [setUp]);

  //const filteredUsers = expUsers.filter((expUser) => expUser.id !== currentUserId);
  //const filteredGroups = groups.filter((group) => group.id !== currentGroupId);

  const RecContainer = () => {
    const type = expType;
    // if(!setUp){
    // 	return (<div style={{textAlign: "center"}}><h2>Loading...</h2></div>);
    // }
    let kVal = 0;
    switch (type) {
      case "user":
        return expRecords.map((expRecord) => (
          <ExploreUserCard key={++kVal} {...expRecord} />
        ));
      case "group":
        return expRecords.map((expRecord) => (
          <ExploreGroupCard key={++kVal} {...expRecord} />
        ));
      case "resource":
        return expRecords.map((expRecord) => (
          <ExploreResourceCard key={++kVal} {...expRecord} />
        ));
    }
  };

  const backPage = () => {
    if (pgn - 1 >= 0) {
      let nVal = pgn - 1;
      setPg(nVal);

      setExpData(currentUserId, nVal);
      setLoading(false);
    }
  };
  const nextPage = () => {
    if (pgn + 1 <= pageMax) {
      let nVal = pgn + 1;
      setPg(nVal);
      setExpData(currentUserId, nVal);
      setLoading(false);
    }
  };

  const LoaderA = () => {
    console.log("FROM HERE" + JSON.stringify(expRecords));
    return <Loader />;
  };
  return (
    <HeadButtonGroup>
      {/*THESE ARE THE BUTTONS AT THE TOP OF THE EXPLORE PAGE */}
      <UserSelectBtn edit onClick={startUserReload}>
        Users
      </UserSelectBtn>
      <GroupSelectBtn edit onClick={startGroupReload}>
        Groups
      </GroupSelectBtn>
      <ResSelectBtn edit onClick={startResourceReload}>
        Resources
      </ResSelectBtn>
      <ExploreContainer>
        <h1>
          Explore {expType.substring(0, 1).toUpperCase() + expType.substring(1)}
          s
        </h1>

        {loading ? <LoaderA /> : <RecContainer />}

        <PageSelector>
          {pgn > 0 && <button onClick={backPage}>{`< Back`}</button>}
          <p>Page {pgn + 1}</p>
          {pgn < pageMax && <button onClick={nextPage}>{`Next >`}</button>}
        </PageSelector>
      </ExploreContainer>
    </HeadButtonGroup>
  );
};

export default Explore;
