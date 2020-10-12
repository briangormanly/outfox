import React, { Fragment } from 'react';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

import { Modal } from '../index';

import {
	GroupsContainer,
	Header,
	CardContainer,
	ButtonContainer
} from './DashboardGroups.elements';

const DashboardGroups = () => {
	return (
		<Fragment>
			<Modal />
			<GroupsContainer>
				<Header>
					<h1>My Groups</h1>
					<ButtonContainer>
						<button>
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
