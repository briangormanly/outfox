import React from 'react';
import { useSelector } from 'react-redux';

import { GroupContainer } from './Groups.elements';
import { GroupAllCard } from '../index';

const Groups = () => {
	const { user } = useSelector((state) => state.userDetail);
	const { Groups } = user;

	return (
		<GroupContainer>
			{Groups.map((group) => <GroupAllCard key={group.id} {...group} />)}
		</GroupContainer>
	);
};

export default Groups;
