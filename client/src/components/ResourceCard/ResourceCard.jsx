import React from 'react';

import { CardContainer, Dates } from './ResourceCard.elements';

const ResourceCard = ({
	GroupId,
	createdAt,
	description,
	id,
	link,
	title,
	type,
	updatedAt
}) => {
	console.log(createdAt);
	console.log(updatedAt);
	return (
		<CardContainer>
			<Dates>
				<span>Created: {createdAt.slice(0, 10)}</span>
				<span>Updated: {updatedAt.slice(0, 10)}</span>
			</Dates>
			<Content />
		</CardContainer>
	);
};

export default ResourceCard;
