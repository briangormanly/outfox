import React, { useEffect, useState} from 'react';
import { useParams, useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

import userService from '../../services/users';
import groupService from '../../services/groups';


import {
	ExploreContainer,
	UserContainer,
	HeadButtonGroup,
	UserSelectBtn,
	GroupSelectBtn,
	ResSelectBtn
} from './Explore.elements';

import { ExploreUserCard } from '../index';
import {ExploreGroupCard} from '../index';
import {ExploreResourceCard} from '../index';
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

 async function getPages(userId){
	// number of pages for recommendations is stored, so we can say "we have 7 pages we can go through"
	const usersNURL = "http://localhost:8080/api/explore/userspgn/" + userId;
	const usersResponse =  await axios.get(usersNURL);
	return usersResponse;
}


// Part II --> Roxy
// make the second API call and pass the userid and page 1 to get user records
async function aiCall(id, page, type){
	let url = "";
	switch(type){
		case "user":
			url = "http://localhost:8080/api/explore/users/" + id + "/"+ page;
			break;
		case "group":
			url = "http://localhost:8080/api/explore/groups/" + id + "/"+ page;
			break;
		case "resource":
			url = "http://localhost:8080/api/explore/resources/" + id + "/"+ page;
			break;
	}

	
	// loop through every single record, and do getUsers() with the userids, return json array
	const response = await axios.get(url);
	return response;
}






const Explore =  (props) => {

	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);
	const [expRecords, setExpRecords] = useState([]);
	const [setUp, setSetUp] = useState(false);
	const [pgn, setPg] = useState(0);
	const [expType, setExpType] = useState("user");
	const history = useHistory();
	const location = useLocation();

	// const handleGroupRoute = () =>{
	// 	history.push(`${location.pathname}/${"ExploreGroups"}`);
	// }

	// const handleResourceRoute = () => {
	// 	history.push(`${location.pathname}/${"ExploreResources"}`);
	// }
	// const handleUserRoute = () => {
	// 	history.push(`${location.pathname}/${"ExploreUsers"}`);
	// }

	const startUserReload = () => {
		setExpType("user");
		setSetUp(false);
	};
	
	const startGroupReload = () => {
		setExpType("group");
		setSetUp(false);
	};

	const startResourceReload = () =>{
		setExpType("resource");
		setSetUp(false);
	};

	const setExpData = async  (userId, pageNumber)=>{
		
		switch(expType){
			case "user":
				const userData =  await aiCall(userId, pageNumber, "user");
				var resJsonRaw = userData.data;
				var resJson = resJsonRaw.users;
				console.log("response was: "+ JSON.stringify(resJson));
				// if(resJson.stringify() == ""){
				// 	setExpRecords({"error": "noData"});
				// 	break;
				// }
				for (var record of resJson) {
					const userDat = await userService.getUser(parseInt(record.id));
					record.firstname =  userDat.firstname;
					record.lastname  =  userDat.lastname;
					record.hashedpw = "REDACTED"; 
				}
				setExpRecords(resJson);
				break;
			case "group":
				const groupData =  await aiCall(userId, pageNumber, "group");
				var resJsonRaw = groupData.data;
				var resJson = resJsonRaw.groups;
				console.log("response was: "+ JSON.stringify(resJson));
				// if(resJson.stringify() == ""){
				// 	setExpRecords({"error": "noData"});
				// 	break;
				// }
				for (var record of resJson) {
					const groupDat = await groupService.getGroupData(record.id + 3655);
					record.groupname =  groupDat.groupname;
					record.datetimeadd  =  groupDat.datetimeadd;
					const creator = await userService.getUser(groupDat.createdby);
					record.creator = creator.firstname + " " + creator.lastname; 
					 
				}
				setExpRecords(resJson);
				break;
			case "resource":
				const resourceData =  await aiCall(userId, pageNumber, "resource");
				var resJsonRaw = resourceData.data;
				var resJson = resJsonRaw.resources;
				console.log("response was: "+ JSON.stringify(resJson));
				// if(resJson.stringify() == ""){
				// 	setExpRecords({"error": "noData"});
				// 	break;
				// }
				for (var record of resJson) {
					const resourceDat = await groupService.getResourceData(parseInt(record.id));
					record.title =  resourceDat.title;
					record.type  =  resourceDat.type;
					const creator = await userService.getUser(resourceDat.creatorid);
					record.creator = creator.firstname + " " + creator.lastname; 
				}
				setExpRecords(resJson);
				break;
		}
		
		
	
	};

	
	useEffect(() => {
		
		if(!setUp){
			switch(expType){
				case "user":
					setExpData(currentUserId,1);
					setSetUp(true);
					break;
				case "group":
					setExpData(currentUserId,1);
					setSetUp(true);
					break;
				case "resource":
					setExpData(currentUserId,1);
					setSetUp(true);
					break;
				
			}
			
		}

	}, [setUp]);

	//const filteredUsers = expUsers.filter((expUser) => expUser.id !== currentUserId);
	//const filteredGroups = groups.filter((group) => group.id !== currentGroupId);


	const RecContainer = () => {
		const type = expType;
		// if(!setUp){
		// 	return (<div style={{textAlign: "center"}}><h2>Loading...</h2></div>);
		// }
		switch(type){
			case "user":
				return expRecords.map((expRecord) => <ExploreUserCard key={expRecord.id} {...expRecord} />);
			case "group":
				return expRecords.map((expRecord) => <ExploreGroupCard key={expRecord.id} {...expRecord} />);
			case "resource":
				return expRecords.map((expRecord) => <ExploreResourceCard key={expRecord.id} {...expRecord} />);
		}
	};



	return (
		<HeadButtonGroup>{/*THESE ARE THE BUTTONS AT THE TOP OF THE EXPLORE PAGE */}
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
				<h1>Explore</h1>
			{expRecords &&
					<RecContainer/>
					} 
			</ExploreContainer>
		</HeadButtonGroup>
	);
};

export default Explore;
