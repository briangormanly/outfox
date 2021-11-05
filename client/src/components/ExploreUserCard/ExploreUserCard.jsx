import React, { useState} from 'react';
import {render} from 'react-dom';
import { FaUser } from 'react-icons/fa';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {ExploreUser} from "../index";
import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button,
	SubRow,
	Headline
} from './ExploreUserCard.elements';

const ExploreUserCard = (props) => {
	const { firstname, lastname, username, id, tags, country, city, email } = props;
	const history = useHistory();
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const Uparams = useParams();
	



	const ExpUserExpanded = () =>{
			return(
				<SubRow>
					<span><h2>{`${firstname} ${lastname}`}</h2><h4><i>{`${username}`}</i></h4></span>
					<h5>Related Tags</h5>
					<ul>
						<li>{`${tags[0]}`}</li>
						<li>{`${tags[1]}`}</li>
						<li>{`${tags[2]}`}</li>
					</ul>
					<p>{"Location: "+city + ", "+ country}</p>
					<p><a href={`mailto:${email}`}>{email}</a></p>
					<button onClick={toggleExpand}>close</button>
					
				</SubRow>
			);
			}

		const toggleExpand = () =>{
			const tExp = expanded;
			setExpanded(!tExp);
		}
	return (
	
					
						<ExploreCard>
							<Headline>
			<Content>
				<IconContainer>
					<FaUser />
				</IconContainer>
				<Text>
					<h2>{`${firstname} ${lastname}`}</h2>
					<p>{`${username}`}</p>
					
				</Text>
			</Content>
			
			<Text>
				<h3>Related Tags</h3>
			<ul>
				<li>{`${tags[0]}`}</li>
				<li>{`${tags[1]}`}</li>
				<li>{`${tags[2]}`}</li>
			</ul>
			</Text>
			<ButtonGroup>
				
				<Button edit onClick={toggleExpand}>
					More Info
				</Button>
				
			</ButtonGroup>
			</Headline>
			<br/>
			{expanded && <ExpUserExpanded/>

			}
			
		</ExploreCard>
		

	);
};

export default ExploreUserCard;
