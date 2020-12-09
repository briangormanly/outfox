import axios from 'axios';

const baseURL = 'http://localhost:8080/api/share';
const groupShareURL = `${baseURL}/group`;
const resourceShareURL = `${baseURL}/resource`;

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

export default {
	getSharedGroups,
	shareGroup,
	getSharedResources,
	shareResource,
	deleteSharedResource,
	deleteSharedGroup
};
