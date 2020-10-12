import axios from 'axios';

const baseURL = 'http://localhost:8080/api/groups';

const createGroup = async (newGroupObject) => {
	const response = await axios.post(baseURL, newGroupObject);
	return response.then((response) => response.data);
};

export default {
	createGroup
};
