import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

import {
	Header,
	ButtonContainer
} from '../DashboardGroups/DashboardGroups.elements';
import { ResourcesContainer, ResourceList } from './DashboardResources.elements';

import { Modal, AddResourceForm, ResourceCard } from '../index';

function DashboardResources({ dashboardPaginate, updateFlag, setUpdateFlag }) {
	const [ showModal, setShowModal ] = useState(false);

	const { user } = useSelector((state) => state.userDetail);
	const { id, Resources } = user;

	return (
		<ResourcesContainer>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<AddResourceForm
						updateFlag={updateFlag}
						setUpdateFlag={setUpdateFlag}
						creatorid={id}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
			<Header>
				<h1>My Resources</h1>
				<ButtonContainer>
					<button onClick={() => setShowModal(true)}>
						<span>Create Resource</span> <FaPlus />
					</button>
					<button onClick={() => dashboardPaginate({ type: 'resources' })}>
						<span>View All</span>
						<FaArrowRight />
					</button>
				</ButtonContainer>
			</Header>
			<ResourceList>
				{Resources.filter((resource, indx) => indx < 5).map((resource) => (
					<ResourceCard small showSVG key={resource.id} {...resource} />
				))}
			</ResourceList>
		</ResourcesContainer>
	);
}

export default DashboardResources;
