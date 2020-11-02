import React from 'react';

import {
	FriendCard,
	ImageContainer,
	FriendContent
} from './DashboardFriendsCard.elements';

const DashboardFriendsCard = ({ firstName, time, activity, image }) => {
	return (
		<FriendCard>
			<ImageContainer>
				<img src={image} alt={firstName} />
				<svg viewBox="0 0 106 57 ">
					<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
				</svg>
			</ImageContainer>
			<FriendContent>
				<h3>{firstName}</h3>
				<p>{activity}</p>
				<p>{time}</p>
			</FriendContent>
		</FriendCard>
	);
};

export default DashboardFriendsCard;
