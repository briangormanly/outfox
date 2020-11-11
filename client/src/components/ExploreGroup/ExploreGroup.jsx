import React, { useState, useEffect, Fragment } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import groupService from '../../services/groups.js';
import userService from '../../services/users';

import { Loader, ResourceCard } from '../index';

import { ReturnLink } from '../../pages/GroupPage/GroupPage.elements';
import {
	ExploreGroupContainer,
	Content,
	ResourceContainer,
	Button
} from './ExploreGroup.elements';

const ExploreGroup = ({ match }) => {
	const [ firstName, setFirstName ] = useState('');
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
				const response2 = await userService.getUser(match.params.exploreId);
				const { datetimeadd, groupdescription, groupname, Resources } = response;
				if (mounted) {
					setTitle(groupname);
					setDescription(groupdescription);
					setResources(Resources);
					setDate(datetimeadd.slice(0, 10));
					setLoading(false);
					setFirstName(response2.firstname);
				}
			};

			request();

			return () => (mounted = false);
		},
		[ match.params.groupId ]
	);

	console.log(firstName);

	return (
		<ExploreGroupContainer>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<Content>
						<ReturnLink
							to={`/user/${match.params.id}/explore/${match.params.exploreId}`}
						>
							<FaArrowLeft /> <span>{`Return to ${firstName}'s Page`}</span>
						</ReturnLink>
						<h1>{title}</h1>
						<p>{description}</p>
						<p>Create Date: {date}</p>
						<Button edit>Add to My Groups</Button>

						<ResourceContainer>
							{resources.map((resource) => (
								<ResourceCard
									key={resource.id}
									{...resource}
									showButtons
									showType
									showDates
									showDescription
								/>
							))}
						</ResourceContainer>
					</Content>
				</Fragment>
			)}
		</ExploreGroupContainer>
	);
};

export default ExploreGroup;
