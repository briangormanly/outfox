import React, { useEffect, useState, Fragment } from 'react';
import groupService from '../../services/groups.js';
import { FaArrowLeft, FaHammer, FaTrashAlt, FaPlus } from 'react-icons/fa';

import { Loader, Modal, AddResourceForm } from '../../components';
import {
	GroupPageContainer,
	Container,
	Content,
	ReturnLink,
	ButtonContainer,
	Button,
	ResourceContainer
} from './GroupPage.elements';

const GroupPage = ({ match }) => {
	const { params: { userID, groupID } } = match;

	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ resources, setResources ] = useState([]);
	const [ date, setDate ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ showAddModal, setShowAddModal ] = useState(false);
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ showDeleteModal, setShowDeleteModal ] = useState(false);

	useEffect(
		() => {
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
		},
		[ match.params.groupID ]
	);

	return (
		<GroupPageContainer>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					{showAddModal && (
						<Modal setShowModal={setShowAddModal}>
							<AddResourceForm />
						</Modal>
					)}
					{showEditModal && <Modal setShowModal={setShowEditModal} />}
					{showDeleteModal && <Modal setShowModal={setShowDeleteModal} />}
					<Container>
						<Content>
							<ReturnLink to={`/user/${userID}`}>
								<FaArrowLeft /> <span>Return to Dashboard</span>
							</ReturnLink>
							<h1>{title}</h1>
							<p>{description}</p>
							<p>Create Date: {date}</p>
							<ButtonContainer>
								<Button add flex onClick={() => setShowAddModal(true)}>
									<FaPlus />
									<span>Add Resource</span>
								</Button>
								<Button edit flex onClick={() => setShowEditModal(true)}>
									<FaHammer />
									<span>Edit Group</span>
								</Button>
								<Button delete flex onClick={() => setShowDeleteModal(true)}>
									<FaTrashAlt />
									<span>Delete Group</span>
								</Button>
							</ButtonContainer>
							<ResourceContainer>
								{/*  */}
								{/*  */}
							</ResourceContainer>
						</Content>
					</Container>
				</Fragment>
			)}
		</GroupPageContainer>
	);
};

export default GroupPage;
