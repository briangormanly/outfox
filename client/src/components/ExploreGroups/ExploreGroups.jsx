import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import userService from '../../services/users';
import groupService from '../../services/groups';

import {
	ExploreGroupContainer,
	GroupContainer,
	HeadButtonGroup,
	UserSelectBtn,
	GroupSelectBtn,
	ResSelectBtn
} from './ExploreGroups.elements';

import { ExploreGroup } from '../index';
import { getGroup } from '../../redux/actions/groupPageActions';

// parent function
// when you click on groups

// Part I 
// it calls API and gets data
const getPages = async (userId) => {
// number of pages for recommendations is stored, so we can say "we have 7 pages we can go through"
    const groupsNURL = "/api/explore/groupspgn/" + userId;
	const groupResponse = await axios.get(groupsNURL);
    return groupResponse;
};

// make the second API call and pass the userid and page 1 to get user records

// Part II
// making a new expanded array 
// in a foor loop for every single record it does the getGroup() with the ids, returning json array
const loopingPages = async (userId, groupResponse) => {
    const groupsIds = "/api/explore/groups/" + userId  + groupResponse; //pages;
    for (var records = 0; records <= userId.length; records++){
        getGroups(records);
        const response = await axios.get(groupsIds);
        // put it into a json array /js object, plop that into a new array, do that process for every record
    }
}

const getGroups = async(records) =>{
	//Create function so page compiles
}

 // Part III
 // take each record from the second array and turn it into a component

 // Part IV
 // render() the componenet
 // call the page which makes the component (another loop), returning the object


    // const handleUserRoute = () =>{
	// 	history.push(`${location.pathname}/${"/Explore"}`);
	// }

const ExploreGroups = async () => {
	const [users, setUsers] = useState([]);
	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);

    const userPages = await getPages(currentUserId);

	const [groups, setGroup] = useState([]);
	const Gparams = useParams();
	const currentGroupId = parseFloat(Gparams.id);

	const history = useHistory();
    const location = useLocation();

	const handleUserRoute = () =>{
		history.push("/Explore");
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

	const filteredGroups = groups.filter((group) => group.id !== currentGroupId);

	return (
		<HeadButtonGroup>{/*THESE ARE THE BUTTONS AT THE TOP OF THE EXPLORE PAGE */}
			<UserSelectBtn edit onClick={handleUserRoute}>
				Users
			</UserSelectBtn>
			<GroupSelectBtn edit onClick={console.log("HERE" + 2)}>
				Groups
			</GroupSelectBtn>
			<ResSelectBtn edit onClick={console.log("HERE" + 3)}>
				Resources
			</ResSelectBtn>
			<ExploreGroupContainer>
				<h1>Explore</h1>
				<GroupContainer>
					{filteredGroups &&
						filteredGroups.map((group) => <ExploreGroup key={group.id} {...group} />)}
				</GroupContainer>
			</ExploreGroupContainer>
		</HeadButtonGroup>
	);
};

export default ExploreGroups;