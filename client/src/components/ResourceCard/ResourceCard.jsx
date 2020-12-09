import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import parse from 'html-react-parser';

import groupService from '../../services/groups';
import shareService from '../../services/sharing';

import { deleteSharedResource } from '../../redux/actions/userActions';

import {
	CardContainer,
	Dates,
	Content,
	ButtonContainer,
	Attributes,
	FolderIcon,
	DownloadButton,
	Description
} from './ResourceCard.elements';

import { ActionButton as Button } from '../../styles';

import {
	Modal,
	DeleteResourceForm,
	EditResourceForm,
	ShareResourceForm,
	AddSharedResourceForm
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
	showSVG,
	shared,
	sharedFrom,
	shareResourceId,
	uri,
	fileName,
	resourceAttributes
}) => {
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ showDeleteModal, setShowDeleteModal ] = useState(false);
	const [ showShareModal, setShowShareModal ] = useState(false);
	const [ showAddToModal, setShowAddToModal ] = useState(false);

	const params = useParams();

	// redux
	const dispatch = useDispatch();

	const handleDownload = () => {
		try {
			groupService.downloadResource(id, type, title, fileName);
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveShared = () => {
		try {
			console.log('Remove shared resource');
			console.log(shareResourceId);
			// shareService.deleteSharedResource(shareResourceId);
			dispatch(deleteSharedResource(shareResourceId));
		} catch (error) {
			console.log('Caught an error');
		}
	};

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
			{showAddToModal && (
				<Modal setShowModal={setShowAddToModal}>
					<AddSharedResourceForm
						setShowModal={setShowAddToModal}
						resourceID={id}
						resourceAttributes={resourceAttributes}
					/>
				</Modal>
			)}
			<CardContainer small={small}>
				{showSVG && <FolderIcon />}
				{showDates && (
					<Dates>
						{shared && (
							<span>
								Shared By: {`${sharedFrom.firstname} ${sharedFrom.lastname}`}
							</span>
						)}
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
								<span>Description:</span> {parse(description)}
							</p>
						)}

						<p>
							{uri ? (
								<DownloadButton onClick={handleDownload}>
									<span>Download</span> <FaDownload />
								</DownloadButton>
							) : link ? (
								<a href={link} target="_blank" rel="noopener noreferrer">
									<span>Go To Resource</span> <FaExternalLinkAlt />
								</a>
							) : (
								''
							)}
							{/* <a href={link} target="_blank" rel="noopener noreferrer">
								<span>Go To Resource</span> <FaExternalLinkAlt />
							</a> */}
						</p>
					</Attributes>
					{shared && (
						<ButtonContainer>
							<Button edit onClick={() => setShowAddToModal(true)}>
								Add to...
							</Button>
							<Button delete onClick={handleRemoveShared}>
								Remove
							</Button>
						</ButtonContainer>
					)}
					{showButtons && (
						<ButtonContainer>
							{params.exploreId ? (
								<Button edit onClick={() => setShowAddToModal(true)}>
									Add to...
								</Button>
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
