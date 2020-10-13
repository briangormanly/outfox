import axios from 'axios';

const groupsURL = 'http://localhost:8080/api/groups';
const resouceURL = 'http://localhost:8080/api/resources';

const createGroup = async (newGroupObject) => {
	const response = await axios.post(groupsURL, newGroupObject);
	return response.data;
};

const getGroupData = async (id) => {
	const response = await axios.get(`${groupsURL}/${id}`);
	return response.data;
};

const createResource = async (newResourceObject) => {
	const response = await axios.post(resouceURL, newResourceObject);
	return response.data;
};

export default {
	createGroup,
	getGroupData,
	createResource
};
