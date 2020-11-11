import React, { useState, useEffect, Fragment } from 'react';
import groupService from '../../services/groups.js';

import { Loader } from '../index';

import { ExploreGroupContainer } from './ExploreGroup.elements';

const ExploreGroup = ({ match }) => {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ resources, setResources ] = useState([]);
	const [ date, setDate ] = useState('');
	const [ loading, setLoading ] = useState(false);

	console.log(match);

	useEffect(
		() => {
			let mounted = true;
			const request = async () => {
				setLoading(true);
				const response = await groupService.getGroupData(match.params.groupId);
				const { datetimeadd, groupdescription, groupname, Resources } = response;
				if (mounted) {
					setTitle(groupname);
					setDescription(groupdescription);
					setResources(Resources);
					setDate(datetimeadd.slice(0, 10));
					setLoading(false);
				}
			};

			request();

			return () => (mounted = false);
		},
		[ match.params.groupId ]
	);

	console.log(title, description, resources, date);

	return (
		<ExploreGroupContainer>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<h1>Explore Group Page</h1>
				</Fragment>
			)}
		</ExploreGroupContainer>
	);
};

export default ExploreGroup;
