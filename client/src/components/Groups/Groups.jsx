import React from 'react';

import { GroupContainer } from './Groups.elements';
import { GroupAllCard } from '../index';

const Groups = ({ groups }) => {
	return (
		<GroupContainer>
			{groups.map((group) => <GroupAllCard key={group.id} {...group} />)}
		</GroupContainer>
	);
};

export default Groups;
