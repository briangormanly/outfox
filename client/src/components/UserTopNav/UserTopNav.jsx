import React from 'react';

import { TopNavContainer, SearchField } from './UserTopNav.elements';

const UserTopNav = () => {
	return (
		<TopNavContainer>
			<SearchField>
				<input type="text" name="search" placeholder="Search" />
				<button>C</button>
			</SearchField>
			<div>hello</div>
			<div>hello</div>
		</TopNavContainer>
	);
};

export default UserTopNav;
