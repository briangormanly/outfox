import React, { Fragment, useState } from 'react';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

import { Modal, CreateGroupForm } from '../index';

import {
	GroupsContainer,
	Header,
	CardContainer,
	ButtonContainer
} from './DashboardGroups.elements';

const DashboardGroups = () => {
	const [ showModal, setShowModal ] = useState(false);

	return (
		<Fragment>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<CreateGroupForm />
				</Modal>
			)}
			<GroupsContainer>
				<Header>
					<h1>My Groups</h1>
					<ButtonContainer>
						<button onClick={() => setShowModal(true)}>
							<span>Create Group</span> <FaPlus />
						</button>
						<button>
							<span>View All</span>
							<FaArrowRight />
						</button>
					</ButtonContainer>
				</Header>
				<CardContainer>Some More content</CardContainer>
			</GroupsContainer>
		</Fragment>
	);
};

export default DashboardGroups;
