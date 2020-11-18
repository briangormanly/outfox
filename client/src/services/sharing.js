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

const deleteSharedGroup = (id) => {};

const deleteSharedResource = (id) => {};

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
	shareResource
};
