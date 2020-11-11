import React from 'react';

import { Link } from '../../styles/globalStyles';

import { useParams } from 'react-router-dom';

import {
	FaBookReader,
	FaTools,
	FaUserFriends,
	FaRegFolderOpen,
	FaCubes,
	FaLayerGroup
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
		friendsActive,
		exploreActive,
		helpActive
	} = state;

	const locationParams = useParams();
	const userURL = `/user/${locationParams.id}`;

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
				<Link to={userURL}>
					<div>
						<FaCubes />
						<span>Dashboard</span>
					</div>
				</Link>
			</SideNavButton>
			<SideNavButton name="groups" onClick={handleClick} active={groupsActive}>
				<Link to={`${userURL}/groups`}>
					<div>
						<FaRegFolderOpen />
						<span>Groups</span>
					</div>
				</Link>
			</SideNavButton>
			<SideNavButton name="resources" onClick={handleClick} active={resourcesActive}>
				<Link to={`${userURL}/resources`}>
					<div>
						<FaLayerGroup />
						<span>Resources</span>
					</div>
				</Link>
			</SideNavButton>
			<SideNavButton name="explore" onClick={handleClick} active={exploreActive}>
				<Link to={`${userURL}/explore`}>
					<div>
						<FaBookReader />
						<span>Explore</span>
					</div>
				</Link>
			</SideNavButton>
			<SideNavButton name="friends" onClick={handleClick} active={friendsActive}>
				<Link to={`${userURL}/friends`}>
					<div>
						<FaUserFriends />
						<span>Friends</span>
					</div>
				</Link>
			</SideNavButton>
			<SideNavButton name="help" onClick={handleClick} active={helpActive}>
				<Link to={`${userURL}/help`}>
					<div>
						<FaTools />
						<span>Help</span>
					</div>
				</Link>
			</SideNavButton>
			<DashboardSettings>
				<p>You can change the dashboard settings</p>
				<button>Settings</button>
			</DashboardSettings>
		</UserSideNavContainer>
	);
};

export default UserSideNav;
