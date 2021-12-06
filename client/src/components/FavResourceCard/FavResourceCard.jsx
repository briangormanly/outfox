import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import parse from "html-react-parser";

import groupService from "../../services/groups";
import commentService from "../../services/comments";
import userService from "../../services/users";

import { deleteSharedResource } from "../../redux/actions/userActions";

import {
  CardContainer,
  Dates,
  Content,
  ButtonContainer,
  Attributes,
  FolderIcon,
  DownloadButton,
  Description,
  ShowCommentButton,
  CommentContent,
  CommentInput,
  CommentButton,
  CommentCardContent,
  AssignmentFormCardContainer,
} from "./FavResourceCard.elements";

import { ActionButton as Button } from "../../styles";

import {
  Modal,
  DeleteResourceForm,
  EditResourceForm,
  ShareResourceForm,
  AddSharedResourceForm,
} from "../index";

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
  isWithAssignmentForm,
  showSVG,
  shared,
  sharedFrom,
  shareResourceId,
  uri,
  fileName,
  resourceAttributes,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAddToModal, setShowAddToModal] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showComments, setShowComments] = useState(false);

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
      // shareService.deleteSharedResource(shareResourceId);
      dispatch(deleteSharedResource(shareResourceId));
    } catch (error) {
      console.log("Caught an error");
    }
  };

  const removeFavorite = async () =>{
      const resp = await groupService.remFavoriteResource(params.id, id);
      setVisible(false);
  }



  return (
      visible &&
    <Fragment>
      {showEditModal && (
        <Modal setShowModal={setShowEditModal}>
          <EditResourceForm setShowModal={setShowEditModal} resourceID={id} />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal setShowModal={setShowDeleteModal}>
          <DeleteResourceForm
            setShowModal={setShowDeleteModal}
            resourceID={id}
          />
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

      {isWithAssignmentForm ? (
        <AssignmentFormCardContainer>
          <h2>{title}</h2>
        </AssignmentFormCardContainer>
      ) : (
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
                <Description>
                  <span>Description:</span> {parse(description)}
                </Description>
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
                  ""
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
                    <button onClick={removeFavorite}>Remove Favorite</button>
                  </Fragment>
                )}
              </ButtonContainer>
            )}
          </Content>
          <button onClick={removeFavorite}>Remove Favorite</button>
          {showComments ? (
            <ShowCommentButton onClick={() => setShowComments(false)}>
              Hide Comments
              <FaArrowUp />
            </ShowCommentButton>
          ) : (
            <ShowCommentButton onClick={() => setShowComments(true)}>
              Show Comments
              <FaArrowDown />
            </ShowCommentButton>
          )}

          {showComments && <CommentContainer resourceID={id} />}
        </CardContainer>
      )}
    </Fragment>
  );
};

const CommentContainer = ({ resourceID }) => {
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState([]);
  const [update, setUpdate] = useState(0);

  const userDetail = useSelector((state) => state.userDetail);
  const { user } = userDetail;

  useEffect(() => {
    const getComments = async () => {
      const response = await commentService.getResourceComments(resourceID);
      setCommentArr(response);
    };

    getComments();
  }, [resourceID, update]);

  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentObject = {
      commentedOnResource: resourceID,
      title: "comment",
      threadID: null,
      body: comment,
      createdBy: user.id,
    };

    const response = await commentService.createComment(commentObject);

    setComment("");
    setUpdate(update + 1);
  };

  return (
    <CommentContent>
      {commentArr.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
      <form onSubmit={handleSubmit}>
        <CommentInput
          placeholder="Add a public comment..."
          value={comment}
          onChange={handleChange}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </form>
    </CommentContent>
  );
};

const CommentCard = ({ createdBy, id, body }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    let mounted = true;
    const getUser = async () => {
      const response = await userService.getUser(createdBy);
      if (mounted) {
        setFirstName(response.firstname);
        setLastName(response.lastname);
      }
    };

    getUser();

    return () => (mounted = false);
  }, [createdBy]);

  return (
    <CommentCardContent>
      <p>
        <span>
          {firstName} {lastName} :
        </span>{" "}
        {body}
      </p>
    </CommentCardContent>
  );
};

export default ResourceCard;
