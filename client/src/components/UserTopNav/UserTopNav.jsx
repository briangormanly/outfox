import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAction } from '../../redux/actions/userActions';

import { TopNavContainer, SearchField, LinkContainer } from './UserTopNav.elements';
import {
	FaSearch,
	FaUser,
	FaBell,
	FaComments,
	FaCog,
	FaSignOutAlt
} from 'react-icons/fa';

const UserTopNav = () => {
	let history = useHistory();
	let storeDispatch = useDispatch();

	const handleLogout = () => {
		storeDispatch(logoutAction());
		history.push('/');
	};

	return (
		<TopNavContainer>
			<SearchField>
				<form>
					<input type="text" name="search" placeholder="Search" />
					<button type="submit">
						<FaSearch />
					</button>
				</form>
			</SearchField>
			<LinkContainer>
				<button>
					<FaComments />
				</button>
				<button>
					<FaBell />
				</button>
				<button>
					<FaCog />
				</button>
				<button>
					<FaUser />
				</button>
				<button onClick={handleLogout}>
					<FaSignOutAlt />
				</button>
			</LinkContainer>
		</TopNavContainer>
	);
};

export default UserTopNav;
