import React from 'react';

import {
	FaBookReader,
	FaTools,
	FaUserFriends,
	FaRegFolderOpen,
	FaCubes,
	FaLayerGroup,
	FaRegCalendarCheck
} from 'react-icons/fa';

import { ReactComponent as Logo } from '../../assets/fox.svg';
import {
	UserSideNavContainer,
	WelcomeMessage,
	SideNavButton,
	DashboardSettings
} from './UserSideNav.elements';

import Clock from '../Clock/Clock';

const UserSideNav = ({ firstName, lastName, handleClick, state }) => {
	const {
		dashboardActive,
		groupsActive,
		resourcesActive,
		coursesActive,
		calendarActive,
		friendsActive,
		helpActive
	} = state;

	return (
		<UserSideNavContainer>
			<Logo />
			<WelcomeMessage>
				<p>Welcome,</p>
				<p>
					<strong>
						{firstName} {lastName}
					</strong>
				</p>
				<Clock />
			</WelcomeMessage>
			<SideNavButton name="dashboard" onClick={handleClick} active={dashboardActive}>
				<div>
					<FaCubes />

					<span>Dashboard</span>
				</div>
			</SideNavButton>
			<SideNavButton name="groups" onClick={handleClick} active={groupsActive}>
				<div>
					<FaRegFolderOpen />
					<span>Groups</span>
				</div>
			</SideNavButton>
			<SideNavButton name="resources" onClick={handleClick} active={resourcesActive}>
				<div>
					<FaLayerGroup />
					<span>Resources</span>
				</div>
			</SideNavButton>
			<SideNavButton name="courses" onClick={handleClick} active={coursesActive}>
				<div>
					<FaBookReader />
					<span>Courses</span>
				</div>
			</SideNavButton>
			<SideNavButton name="calendar" onClick={handleClick} active={calendarActive}>
				<div>
					<FaRegCalendarCheck />
					<span>Calendar</span>
				</div>
			</SideNavButton>
			<SideNavButton name="friends" onClick={handleClick} active={friendsActive}>
				<div>
					<FaUserFriends />
					<span>Friends</span>
				</div>
			</SideNavButton>
			<SideNavButton name="help" onClick={handleClick} active={helpActive}>
				<div>
					<FaTools />
					<span>Help</span>
				</div>
			</SideNavButton>
			<DashboardSettings>
				<p>You can change the dashboard settings</p>
				<button>Settings</button>
			</DashboardSettings>
		</UserSideNavContainer>
	);
};

export default UserSideNav;
