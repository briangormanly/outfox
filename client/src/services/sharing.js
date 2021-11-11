import axios from 'axios';

const baseURL = 'http://localhost:8080/api/share';
const groupShareURL = `${baseURL}/group`;
const resourceShareURL = `${baseURL}/resource`;
const lessonShareURL = `${baseURL}/lesson`;
const assignmentShareURL = `${baseURL}/assignment`;

const getSharedGroups = (id) => {
	const response = axios.get(`${groupShareURL}/${id}`);
	return response.then((response) => response.data);
};

const shareGroup = (newObject) => {
	const response = axios.post(groupShareURL, newObject);
	return response.then((response) => response.data);
};

const deleteSharedGroup = (id) => {
	const response = axios.delete(`${groupShareURL}/${id}`);
	return response.then((response) => response.data);
};

const deleteSharedResource = (id) => {
	const response = axios.delete(`${resourceShareURL}/${id}`);
	return response.then((response) => response.data);
};

const getSharedResources = (id) => {
	const response = axios.get(`${resourceShareURL}/${id}`);
	return response.then((response) => response.data);
};

const shareResource = (newObject) => {
	const response = axios.post(resourceShareURL, newObject);
	return response.then((response) => response.data);
};

const deleteSharedAssignments = (id) => {
	const response = axios.delete(`${assignmentShareURL}/${id}`);
	return response.then((response) => response.data);
};

const getSharedAssignments = (id) => {
	const response = axios.get(`${assignmentShareURL}/${id}`);
	return response.then((response) => response.data);
};

const shareAssignments = (newObject) => {
	const response = axios.post(assignmentShareURL, newObject);
	return response.then((response) => response.data);
};


const deleteSharedLessons = (id) => {
	const response = axios.delete(`${lessonShareURL}/${id}`);
	return response.then((response) => response.data);
};

const getSharedLessons = (id) => {
	const response = axios.get(`${lessonShareURL}/${id}`);
	return response.then((response) => response.data);
};

const shareLessons = (newObject) => {
	const response = axios.post(lessonShareURL, newObject);
	return response.then((response) => response.data);
};


export default {
	getSharedGroups,
	shareGroup,
	getSharedResources,
	shareResource,
	deleteSharedResource,
	deleteSharedGroup,
	getSharedAssignments,
	shareAssignments,
	deleteSharedAssignments,
	getSharedLessons,
	shareLessons,
	deleteSharedLessons
};
