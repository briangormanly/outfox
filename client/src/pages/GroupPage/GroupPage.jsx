import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaArrowLeft, FaHammer, FaTrashAlt, FaPlus, FaShare } from 'react-icons/fa';

import { getGroup } from '../../redux/actions/groupPageActions';

import {
	Loader,
	Modal,
	AddResourceForm,
	ResourceCard,
	DeleteGroupForm,
	EditGroupForm,
	ShareResourceForm
} from '../../components';
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

	const [ loading, setLoading ] = useState(false);
	const [ showAddModal, setShowAddModal ] = useState(false);
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ showDeleteModal, setShowDeleteModal ] = useState(false);
	const [ showShareModal, setShowShareModal ] = useState(false);

	// redux
	const dispatch = useDispatch();
	const { resources, title, description, date } = useSelector(
		(state) => state.groupPageDetail
	);

	useEffect(
		() => {
			try {
				dispatch(getGroup(match.params.groupID));
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		},
		[ match.params.groupID, dispatch ]
	);

	return (
		<GroupPageContainer>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					{showAddModal && (
						<Modal setShowModal={setShowAddModal}>
							<AddResourceForm GroupId={groupID} setShowModal={setShowAddModal} />
						</Modal>
					)}
					{showEditModal && (
						<Modal setShowModal={setShowEditModal}>
							<EditGroupForm GroupId={groupID} setShowModal={setShowEditModal} />
						</Modal>
					)}
					{showDeleteModal && (
						<Modal setShowModal={setShowDeleteModal}>
							<DeleteGroupForm
								GroupId={groupID}
								setShowModal={setShowDeleteModal}
								userID={userID}
							/>
						</Modal>
					)}
					{showShareModal && (
						<Modal setShowModal={setShowShareModal}>
							<ShareResourceForm
								GroupID={groupID}
								setShowModal={setShowShareModal}
								userID={userID}
							/>
						</Modal>
					)}
					<Container>
						<Content>
							<ReturnLink to={`/user/${userID}`}>
								<FaArrowLeft /> <span>Return to Dashboard</span>
							</ReturnLink>
							<h1>{title}</h1>
							<p>{description}</p>
							<p>Create Date: {date.slice(0, 10)}</p>
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
								<Button add flex onClick={() => setShowShareModal(true)}>
									<FaShare />
									<span>Share Group</span>
								</Button>
							</ButtonContainer>
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
					</Container>
				</Fragment>
			)}
		</GroupPageContainer>
	);
};

export default GroupPage;
