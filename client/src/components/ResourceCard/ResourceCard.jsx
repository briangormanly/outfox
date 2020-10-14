import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import {
	CardContainer,
	Dates,
	Content,
	ButtonContainer,
	Attributes,
	FolderIcon
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
	showDates,
	showDescription,
	showSVG
}) => {
	return (
		<CardContainer small={small}>
			{showSVG && <FolderIcon />}
			{showDates && (
				<Dates>
					<span>Created: {createdAt.slice(0, 10)}</span>
					<span>Updated: {updatedAt.slice(0, 10)}</span>
				</Dates>
			)}
			<Content>
				<Attributes showSVG={showSVG}>
					<h2>{title}</h2>
					{showType && (
						<p>
							<span>Type:</span> {type}
						</p>
					)}
					{showDescription && (
						<p>
							<span>Description:</span> {description}
						</p>
					)}

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
