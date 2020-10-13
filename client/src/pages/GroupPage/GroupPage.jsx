import React, { useEffect, useState } from 'react';
import groupService from '../../services/groups.js';
import { FaArrowLeft } from 'react-icons/fa';

import { Loader } from '../../components';
import { GroupPageContainer, Content, ReturnLink } from './GroupPage.elements';

const GroupPage = ({ match }) => {
	const { params: { userID, groupID } } = match;

	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ resources, setResources ] = useState([]);
	const [ date, setDate ] = useState('');
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		const request = async () => {
			setLoading(true);
			const response = await groupService.getGroupData(match.params.groupID);
			const { datetimeadd, groupdescription, groupname, Resources } = response;
			setTitle(groupname);
			setDescription(groupdescription);
			setResources(Resources);
			setDate(datetimeadd.slice(0, 10));
			setLoading(false);
		};

		request();
	}, []);
	return (
		<GroupPageContainer>
			{loading ? (
				<Loader />
			) : (
				<Content>
					<ReturnLink to={`/user/${userID}`}>
						<FaArrowLeft /> <span>Return to Dashboard</span>
					</ReturnLink>
					<h1>{title}</h1>
					<p>{description}</p>
				</Content>
			)}
		</GroupPageContainer>
	);
};

export default GroupPage;
