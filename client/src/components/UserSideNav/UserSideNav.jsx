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

const UserSideNav = ({ firstName, lastName }) => {
	return (
		<UserSideNavContainer>
			<Logo />
			<WelcomeMessage>
				<p>Welcome Back,</p>
				<p>
					<strong>
						{firstName} {lastName}
					</strong>
				</p>
				<Clock />
			</WelcomeMessage>
			<SideNavButton>
				<div>
					<FaCubes />

					<span>Dashboard</span>
				</div>
			</SideNavButton>
			<SideNavButton>
				<div>
					<FaRegFolderOpen />
					<span>Groups</span>
				</div>
			</SideNavButton>
			<SideNavButton>
				<div>
					<FaLayerGroup />
					<span>Resources</span>
				</div>
			</SideNavButton>
			<SideNavButton>
				<div>
					<FaBookReader />
					<span>Courses</span>
				</div>
			</SideNavButton>
			<SideNavButton>
				<div>
					<FaRegCalendarCheck />
					<span>Calendar</span>
				</div>
			</SideNavButton>
			<SideNavButton>
				<div>
					<FaUserFriends />
					<span>Friends</span>
				</div>
			</SideNavButton>
			<SideNavButton>
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
