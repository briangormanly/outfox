import React, {useState, useParams, useEffect} from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import groupService from '../../services/groups';
import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button,
	Headline,
	SubRow,
	FavedBlk
} from './ExploreResourceCard.elements';

const ExploreResourceCard = (props) => {
	const {myid, title, type, creator, id, tags, city, country, email, createdAt,updatedAt, description } = props;
	const history = useHistory();
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const [faved, setFaved] = useState(false);



	const favResource = async() =>{
		setFaved(true);
		const resp = await groupService.setfavoriteResource(myid, id);
		setTimeout(() =>{setFaved(false)},3000);
	};

	// useEffect(()=>{
	// 	if(faved){

	// 	}
	// })

	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	const toggleExpand = () =>{
		const tExp = expanded;
		setExpanded(!tExp);
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
			{tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
				
			</ul>
			<p>{"Location: "+city + ", "+ country}</p>
			<p>Creator's email:<a href={`mailto:${email}`}> {email}</a></p>
			<p><i>{`Created: ${createdAt}`}</i></p>
			<p><i>{`Last Update: ${updatedAt}`}</i></p>
		
			<button onClick={toggleExpand}>close</button>
		</SubRow>
	);
}

const FavedRecBlock = () =>{
	return(
		<FavedBlk>
		<h4><span>{`${title}`}</span></h4>
		<h5>has been added to your favorites.</h5>
	</FavedBlk>
	)
};



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
				{tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
				
			</ul>
			</Text>
			<ButtonGroup>
			<Button edit onClick={favResource}>
					Favorite
				</Button>
				<br/>
				{
					faved && <FavedRecBlock/>
				}
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
