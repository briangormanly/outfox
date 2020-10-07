import React from 'react';

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
				<button>
					<FaSignOutAlt />
				</button>
			</LinkContainer>
		</TopNavContainer>
	);
};

export default UserTopNav;
