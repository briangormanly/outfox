import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import {
	CardContainer,
	Dates,
	Content,
	ButtonContainer,
	Attributes
} from './ResourceCard.elements';

import { ActionButton as Button } from '../../styles';

const ResourceCard = ({
	GroupId,
	createdAt,
	description,
	id,
	link,
	title,
	type,
	updatedAt,
	small,
	showButtons,
	showType,
	showDates
}) => {
	return (
		<CardContainer small={small}>
			{showDates && (
				<Dates>
					<span>Created: {createdAt.slice(0, 10)}</span>
					<span>Updated: {updatedAt.slice(0, 10)}</span>
				</Dates>
			)}
			<Content>
				<Attributes>
					<h2>{title}</h2>
					{showType && (
						<p>
							<span>Type:</span> {type}
						</p>
					)}

					<p>
						<span>Description:</span> {description}
					</p>
					<p>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<span>Go To Resource</span> <FaExternalLinkAlt />
						</a>
					</p>
				</Attributes>
				{showButtons && (
					<ButtonContainer>
						<Button edit>Edit</Button>
						<Button delete>Delete</Button>
					</ButtonContainer>
				)}
			</Content>
		</CardContainer>
	);
};

export default ResourceCard;
