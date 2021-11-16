import React, {useState} from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button,
	Headline,
	SubRow
} from './ExploreResourceCard.elements';

const ExploreResourceCard = (props) => {
	const { title, type, creator, id, tags, city, country, email, createdAt,updatedAt, description } = props;
	const history = useHistory();
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	const toggleExpand = () =>{
		const tExp = expanded;
		setExpanded(!tExp);
	}
	const favResource = () =>{
		console.log("Favorited Resource")
	}


const ExpRecExpanded = () =>{
	return(
		<SubRow>
			<h2>{`${title}`}</h2>
			<p><i>{`Resource Type: ${type}`}</i></p>
			<h6>Description: {description}</h6>
					<p>{`Created by: ${creator}`}</p>
                    
			<h5>Related Tags</h5>
		<ul>
			<li>{`${tags[0].toLowerCase()}`}</li>
			<li>{`${tags[1].toLowerCase()}`}</li>
			<li>{`${tags[2].toLowerCase()}`}</li>
		</ul>
			<p>{"Location: "+city + ", "+ country}</p>
			<p>Creator's email:<a href={`mailto:${email}`}> {email}</a></p>
			<p><i>{`Created: ${createdAt}`}</i></p>
			<p><i>{`Last Update: ${updatedAt}`}</i></p>
		
			<button onClick={toggleExpand}>close</button>
		</SubRow>
	);
}




	return (
		

	
<ExploreCard>
			<Headline>
			<Content>
				<IconContainer>
					<FaFileAlt />
				</IconContainer>
				<Text>
					<h2>{`${title}`}</h2>
					
                    <p><i>{`Resource Type: ${type}`}</i></p>
					<p>{`Created by: ${creator}`}</p>
                    <p><i>{`Created: ${createdAt}`}</i></p>
					
				</Text>
			</Content>
			<Text>
				<h3>Related Tags</h3>
			<ul>
				<li>{`${tags[0].toLowerCase()}`}</li>
				<li>{`${tags[1].toLowerCase()}`}</li>
				<li>{`${tags[2].toLowerCase()}`}</li>
			</ul>
			</Text>
			<ButtonGroup>
			<Button edit onClick={favResource}>
					Favorite
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				
				<Button edit onClick={toggleExpand}>
				More Info
				</Button>
				
			</ButtonGroup>
			</Headline>
			<br/>
			{
				expanded && <ExpRecExpanded/>
			}
		</ExploreCard>



	);
};

export default ExploreResourceCard;
