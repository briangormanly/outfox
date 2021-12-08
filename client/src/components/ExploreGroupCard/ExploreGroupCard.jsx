import { date } from 'faker';
import React, { useState, useParams, useEffect} from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import 'animate.css';
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
} from './ExploreGroupCard.elements';
import axFactoryService from "../../services/axFactory";
const ExploreGroupCard = (props) => {
	const {myid, groupname,datetimeadd,creator,creatorid, id,email, tags, groupdescription, city, country } = props;
	const history = useHistory();
	const location = useLocation();
	const [faved, setFaved] = useState(false);
	const [expanded, setExpanded] = useState(false);
	
	let ax = axFactoryService.genAx();




	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("datetimeadd:  ["+datetimeadd+"], datatype: "+ typeof(datetimeadd));
	const tdt = datetimeadd;
	let timestamp = "                                      ";
	if(typeof tdt !== 'undefined' && tdt){

		const year = tdt.toString().substr(0,4);
		const month = tdt.toString().substr(5,2);
		const day = tdt.toString().substr(8,2);
		let hour = tdt.toString().substr(11,2);
		const minute = tdt.toString().substr(14,2);
		const second = tdt.toString().substr(17,2);
		
		const date = months[parseInt(month)] + " " + parseInt(day) + ", " + year;
		let  period = "AM";
		if (hour > 11) {
			period = "PM";
			if (hour > 12) {
			   hour -= 12;
			}
		 }
		 if (hour == 0) {
			hour = 12;
		 }
	
		 const time = hour + ":" + minute + ":" + second + " " + period;
		 timestamp = `Created: ${date} at ${time}`;
	}


	//http://localhost:3000/user/669/groups/4566

	// const handleClick = () => {
	// 	history.push(`http://localhost:3000/user/${creatorid}/groups/${id}`);
	// };
	const toggleExpand = () =>{
		
		const tExp = expanded;
		setExpanded(!tExp);
	}





	const favGroup = async() =>{
		setFaved(true);
		const resp = await groupService.setfavoriteGroup(myid, id);
		
		const rr = await ax.get("/triggerCache?userid="+ myid );
		setTimeout(() =>{setFaved(false)},3000);
	};

	const ExpGroupExpanded = () => {
		console.log("made it here");
		return(
			<SubRow>
				<h2>{`${groupname}`}</h2>
				<p>{`${groupdescription}`}</p>
				<p>{`Created by: ${creator}`}</p>
				<h5>Related Tags</h5>
			<ul>
			{tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
				
			</ul>
				<p>{"Location: "+city + ", "+ country}</p>
				<p>Creator's email:<a href={`mailto:${email}`}> {email}</a></p>

			
				<button onClick={toggleExpand}>close</button>
			</SubRow>
		);
	};



	const FavedGrpBlock = () =>{
		return(
			<FavedBlk>
				<h4><span>{`${groupname}`}</span></h4>
				<h5>has been added to your favorites.</h5>
			</FavedBlk>
		)
	};





	return (
		<ExploreCard>
			<Headline>
			<Content>
				<IconContainer>
					<FaLayerGroup />
				</IconContainer>
				<Text>
					<h2>{`${groupname}`}</h2>
					<p>{`Created by: ${creator}`}</p>
                    <p><i>{`${timestamp}`}</i></p>
					
				</Text>
			</Content>
			<Text>
				<h3>Related Tags</h3>
				<ul>
				{tags.map((tag)=> {return (<li>{`${tag.toLowerCase()}`}</li>)}) }
				
			</ul>
			</Text>
			<ButtonGroup>
			<Button edit onClick={favGroup}>
					Favorite
				</Button>
				<br/>
				{
					faved && <FavedGrpBlock/>
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
				expanded && <ExpGroupExpanded/>
			}
		</ExploreCard>
	);
};

export default ExploreGroupCard;
