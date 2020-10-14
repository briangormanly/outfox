import React, { Fragment } from 'react';

import { GroupContainer } from './Groups.elements';
import { GroupAllCard } from '../index';

const Groups = ({ groups }) => {
	// console.log(groups[0].datetimeadd.slice(0, 10));
	return (
		<GroupContainer>
			{groups.map((group) => <GroupAllCard key={group.id} {...group} />)}
		</GroupContainer>
	);
};

export default Groups;
