import React from 'react';

import { Link } from '../../styles/globalStyles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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

	const locationParams = useParams();
	const userURL = `/user/${locationParams.id}`;
	console.log(userURL);

	// const { user } = useSelector((state) => state.userDetail);
	// const userURL = `user/${user.id}`;
	// console.log(userURL);

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
			{/* <SideNavButton name="courses" onClick={handleClick} active={coursesActive}>
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
			</SideNavButton> */}
			<SideNavButton name="friends" onClick={handleClick} active={friendsActive}>
				<Link to={`${userURL}/friends`}>
					<div>
						<FaUserFriends />
						<span>Friends</span>
					</div>
				</Link>
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
