import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

import {
	Header,
	ButtonContainer
} from '../DashboardGroups/DashboardGroups.elements';
import { ResourcesContainer, ResourceList } from './DashboardResources.elements';

import { Modal, AddResourceForm, ResourceCard } from '../index';

function DashboardResources() {
	const [ showModal, setShowModal ] = useState(false);

	const { user } = useSelector((state) => state.userDetail);
	const { id, Resources } = user;
	console.log(id);
	console.log(Resources);

	return (
		<ResourcesContainer>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<AddResourceForm creatorid={id} setShowModal={setShowModal} />
				</Modal>
			)}
			<Header>
				<h1>My Resources</h1>
				<ButtonContainer>
					<button onClick={() => setShowModal(true)}>
						<span>Create Resource</span> <FaPlus />
					</button>
					<button>
						<span>View All</span>
						<FaArrowRight />
					</button>
				</ButtonContainer>
			</Header>
			<ResourceList>
				{Resources.map((resource) => (
					<ResourceCard small key={resource.id} {...resource} />
				))}
			</ResourceList>
		</ResourcesContainer>
	);
}

export default DashboardResources;
