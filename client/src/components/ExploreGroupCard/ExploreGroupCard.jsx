import { date } from 'faker';
import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import 'animate.css';

import {
	ExploreCard,
	Content,
	ButtonGroup,
	Text,
	IconContainer,
	Button
} from './ExploreGroupCard.elements';

const ExploreGroupCard = (props) => {
	const { groupname,datetimeadd,creator, id, tags } = props;
	const history = useHistory();
	const location = useLocation();
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




	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	
	return (
		<ExploreCard className={"animate__animated","animate__bounce"}>
			
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
			<ButtonGroup>
				<Button edit onClick={handleClick}>
					View Page
				</Button>
			</ButtonGroup>
			<Text>
				<h3>Related Tags</h3>
			<ul>
				<li>{`${tags[0].toLowerCase()}`}</li>
				<li>{`${tags[1].toLowerCase()}`}</li>
				<li>{`${tags[2].toLowerCase()}`}</li>
			</ul>
			</Text>
		</ExploreCard>
	);
};

export default ExploreGroupCard;
