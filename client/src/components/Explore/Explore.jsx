import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation} from 'react-router-dom';

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
// import {ExploreGroupCard} from '../index';
// import { ExploreGroup } from '../index';
// import { ExploreGroups } from '../index';

// parent functions
// when you click on explore...

// Part I --> Roxy
// it calls API and gets data
const getPages = async (userId) => {
	// number of pages for recommendations is stored, so we can say "we have 7 pages we can go through"
	const usersNURL = "http://localhost:8080//api/explore//userspgn/" + userId;
	const usersResponse = await axios.get(usersNURL);
	return usersResponse;
};


// Part II --> Roxy
// make the second API call and pass the userid and page 1 to get user records
// making a new expanded array 
// in a foor loop for every single record it does the getUsers() with the ids, returning json array
const loopingPages = async (userId, usersResponse) => {
	const usersIds = "http://localhost:8080//api/explore/users/" + userId + usersResponse; //pages, maybe pass in userPages;
	for (records = 0; records <= userId.length; records++) {
		getUsers(records);
		const response = await axios.get(usersIds);
		// put it into a json array /js object, plop that into a new array, do that process for every record
	}
}
	

// Part III --> Sam
// take each record from the second array and turn it into a component

// Part IV --> Andy
// render() the component
// call the page which makes the component (another loop), returning the object


const Explore = () => {
	const [users, setUsers] = useState([]);
	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);

	const userPages = await getPages(currentUserId);


	const [groups, setGroup] = useState([]);
	const Gparams = useParams();
	const currentGroupId = parseFloat(Gparams.id);

	const history = useHistory();
	const location = useLocation();

	const handleGroupRoute = () =>{
		history.push(`${location.pathname}/${"ExploreGroups"}`);
	}

	const handleResourceRoute = () => {
		history.push(`${location.pathname}/${"ExploreResources"}`);
	}

	useEffect(() => {
		let mounted = true;

		const getUsers = async () => {
			const response = await userService.getAll();
			if (mounted) {
				setUsers(response);
			}
		};

		const getGroups = async () => {
			const response = await groupService.getGroupData();
			if (mounted) {
				setGroup(response);
			}
		};
		getUsers();
		getGroups();

		return () => (mounted = false);
	}, []);

	const filteredUsers = users.filter((user) => user.id !== currentUserId);
	const filteredGroups = groups.filter((group) => group.id !== currentGroupId);

	return (
		<HeadButtonGroup>{/*THESE ARE THE BUTTONS AT THE TOP OF THE EXPLORE PAGE */}
			<UserSelectBtn edit onClick={console.log("HERE" + 1)}>
				Users
			</UserSelectBtn>
			<GroupSelectBtn edit onClick={handleGroupRoute}>
				Groups
			</GroupSelectBtn>
			<ResSelectBtn edit onClick={handleResourceRoute}>
				Resources
			</ResSelectBtn>
			<ExploreContainer>
				<h1>Explore</h1>
				<UserContainer>
					{filteredUsers &&
						filteredUsers.map((user) => <ExploreUserCard key={user.id} {...user} />)}
				</UserContainer>
			</ExploreContainer>
		</HeadButtonGroup>
	);
};

export default Explore;
