import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button
} from './ExploreResourceCard.elements';

const ExploreResourceCard = (props) => {
	const { title, type, creator, id, tags } = props;
	const history = useHistory();
	const location = useLocation();

	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	
	return (
		<ExploreCard>
			<Content>
				<IconContainer>
					<FaFileAlt />
				</IconContainer>
				<Text>
					<h2>{`${title}`}</h2>
					<p>{`${creator}`}</p>
                    <p><i>{`Resource Type: ${type}`}</i></p>
					
				</Text>
			</Content>
			<ButtonGroup>
				<Button edit onClick={handleClick}>
					View Page
				</Button>
			</ButtonGroup>
			<Text>
				<h3>Related Tags</h3>
			<ul>
				<li>{`${tags[0]}`}</li>
				<li>{`${tags[1]}`}</li>
				<li>{`${tags[2]}`}</li>
			</ul>
			</Text>
		</ExploreCard>
	);
};

export default ExploreResourceCard;
