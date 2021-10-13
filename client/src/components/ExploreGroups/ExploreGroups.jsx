import React, { useEffect, useState } from 'react';
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

import { GroupCard } from '../index';



const ExploreGroups = () => {
	const [users, setUsers] = useState([]);
	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);

	const [groups, setGroup] = useState([]);
	const Gparams = useParams();
	const currentGroupId = parseFloat(Gparams.id);

	const history = useHistory();
    const location = useLocation();

	const handleUserRoute = () =>{
		history.push("/Explore");
	}

    // const handleUserRoute = () =>{
	// 	history.push(`${location.pathname}/${"/Explore"}`);
	// }

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
						filteredGroups.map((group) => <GroupCard key={group.id} {...group} />)}
				</GroupContainer>
			</ExploreGroupContainer>
		</HeadButtonGroup>
	);
};

export default ExploreGroups;