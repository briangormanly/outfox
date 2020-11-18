import React, { useState, Fragment } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import {
	CardContainer,
	Dates,
	Content,
	ButtonContainer,
	Attributes,
	FolderIcon
} from './ResourceCard.elements';

import { ActionButton as Button } from '../../styles';

import {
	Modal,
	DeleteResourceForm,
	EditResourceForm,
	ShareResourceForm
} from '../index';

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
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ showDeleteModal, setShowDeleteModal ] = useState(false);
	const [ showShareModal, setShowShareModal ] = useState(false);

	const params = useParams();

	return (
		<Fragment>
			{showEditModal && (
				<Modal setShowModal={setShowEditModal}>
					<EditResourceForm setShowModal={setShowEditModal} resourceID={id} />
				</Modal>
			)}
			{showDeleteModal && (
				<Modal setShowModal={setShowDeleteModal}>
					<DeleteResourceForm setShowModal={setShowDeleteModal} resourceID={id} />
				</Modal>
			)}
			{showShareModal && (
				<Modal setShowModal={setShowShareModal}>
					<ShareResourceForm setShowModal={setShowShareModal} resourceID={id} />
				</Modal>
			)}
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
							{params.exploreId ? (
								<Button edit>Add to...</Button>
							) : (
								<Fragment>
									<Button edit onClick={() => setShowEditModal(true)}>
										Edit
									</Button>
									<Button delete onClick={() => setShowDeleteModal(true)}>
										Delete
									</Button>
									<Button add onClick={() => setShowShareModal(true)}>
										Share
									</Button>
								</Fragment>
							)}
						</ButtonContainer>
					)}
				</Content>
			</CardContainer>
		</Fragment>
	);
};

export default ResourceCard;
