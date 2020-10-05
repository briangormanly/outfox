import axios from 'axios';

const baseURL = '/api/users';

const getAll = () => {
	const response = axios.get(baseURL);
	return response.then((response) => response.data);
};

const getUser = (id) => {
	const response = axios.get(`${baseURL}/${id}`);
	return response.then((response) => response.data);
};

export default {
	getAll,
	getUser
};
