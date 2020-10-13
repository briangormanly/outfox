import axios from 'axios';

const baseURL = 'http://localhost:8080/api/groups';

const createGroup = async (newGroupObject) => {
	const response = await axios.post(baseURL, newGroupObject);
	return response.data;
};

const getGroupData = async (id) => {
	const response = await axios.get(`${baseURL}/${id}`);
	return response.data;
};

export default {
	createGroup,
	getGroupData
};
