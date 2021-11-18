import axios from 'axios';

const commentsURL = 'http://localhost:8080/api/comments';
const resourceCommentsURL = 'http://localhost:8080/api/resources/resourcecomments';

const createComment = async (newCommentObject) => {
	const response = await axios.post(commentsURL, newCommentObject);
	return response.data;
};

const deleteComment = async (commentID) => {
	const response = await axios.delete(commentsURL);
	return response.data;
};

const getResourceComments = async (id) => {
	const response = await axios.get(`${resourceCommentsURL}/${id}`);
	return response.data;
};

export default {
	createComment,
	deleteComment,
	getResourceComments
};
