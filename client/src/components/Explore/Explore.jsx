import React, { useEffect, useState} from 'react';
import { useParams, useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

import userService from '../../services/users';


import {
	ExploreContainer,
	UserContainer,
	HeadButtonGroup,
	UserSelectBtn,
	GroupSelectBtn,
	ResSelectBtn
} from './Explore.elements';

import { ExploreUserCard } from '../index';
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

 function getPages(userId){
	// number of pages for recommendations is stored, so we can say "we have 7 pages we can go through"
	const usersNURL = "http://localhost:8080/api/explore/userspgn/" + userId;
	const usersResponse =  axios.get(usersNURL);
	return usersResponse;
}


// Part II --> Roxy
// make the second API call and pass the userid and page 1 to get user records
async function aiCall(userid, page){
	const usersIds = "http://localhost:8080/api/explore/users/" + userid + "/"+ page; //pages, maybe pass in userPages;
	// loop through every single record, and do getUsers() with the userids, return json array
	const response = await axios.get(usersIds);
	return response;
}






const Explore =  () => {

	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);
	const [expUsers, setExpUsers] = useState([]);
	const [setUp, setSetUp] = useState(false);

	const history = useHistory();
	const location = useLocation();

	const handleGroupRoute = () =>{
		history.push(`${location.pathname}/${"ExploreGroups"}`);
	}

	const handleResourceRoute = () => {
		history.push(`${location.pathname}/${"ExploreResources"}`);
	}


	const setExpData = async  (userId, pageNumber)=>{
		const userData =  await aiCall(userId, pageNumber);
			var resJsonRaw = userData.data;
			var resJson = resJsonRaw.users;
		for (var record of resJson) {
			const userDat = await userService.getUser(parseInt(record.id));
				record.firstname =  userDat.firstname;
				record.lastname  =  userDat.lastname;
				record.hashedpw = "REDACTED"; 
		}
		setExpUsers(resJson);
	};

	
	useEffect(() => {
		
		if(!setUp){
			setExpData(currentUserId,1);
			setSetUp(true);
		}

	}, [setExpData]);

	//const filteredUsers = expUsers.filter((expUser) => expUser.id !== currentUserId);
	//const filteredGroups = groups.filter((group) => group.id !== currentGroupId);

	return (
		<HeadButtonGroup>{/*THESE ARE THE BUTTONS AT THE TOP OF THE EXPLORE PAGE */}
			<UserSelectBtn edit onClick={console.log("HERE" + 1)}>
				Users
			</UserSelectBtn>
			<GroupSelectBtn edit onClick={console.log(expUsers)}>
				Groups
			</GroupSelectBtn>
			<ResSelectBtn edit onClick={handleResourceRoute}>
				Resources
			</ResSelectBtn>
			<ExploreContainer>
				<h1>Explore</h1>
			{expUsers &&
					expUsers.map((expUser) => <ExploreUserCard key={expUser.id} {...expUser} />)} 
			</ExploreContainer>
		</HeadButtonGroup>
	);
};

export default Explore;
