import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
import { ExploreGroup } from '../index';

const Explore = () => {
	const [users, setUsers] = useState([]);
	const Uparams = useParams();
	const currentUserId = parseFloat(Uparams.id);

	const [groups, setGroup] = useState([]);
	const Gparams = useParams();
	const currentGroupId = parseFloat(Gparams.id);

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
			<GroupSelectBtn edit onClick={console.log("HERE" + 2)}>
				Groups
			</GroupSelectBtn>
			<ResSelectBtn edit onClick={console.log("HERE" + 3)}>
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
