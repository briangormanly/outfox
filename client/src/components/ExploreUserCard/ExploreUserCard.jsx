import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button
} from './ExploreUserCard.elements';

const ExploreUserCard = (props) => {
	const { firstname, lastname, username, email, id, tags } = props;
	const history = useHistory();
	const location = useLocation();

	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	
	return (
		<ExploreCard>
			<Content>
				<IconContainer>
					<FaUser />
				</IconContainer>
				<Text>
					<h2>{`${firstname} ${lastname}`}</h2>
					<p>{`${username}`}</p>
					<ul>
						<li>{`${tags[0]}`}</li>
						<li>{`${tags[1]}`}</li>
						<li>{`${tags[2]}`}</li>
					</ul>
				</Text>
			</Content>
			<ButtonGroup>
				<Button edit onClick={handleClick}>
					View Page
				</Button>
			</ButtonGroup>
		</ExploreCard>
	);
};

export default ExploreUserCard;
