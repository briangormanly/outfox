import axios from 'axios';

const baseURL = 'http://localhost:8080/api/users';

const getAll = () => {
	const response = axios.get(baseURL);
	return response.then((response) => response.data);
};

const getUser = (id) => {
	const response = axios.get(`${baseURL}/userandgroups/${id}`);
	return response.then((response) => response.data);
};

const createUser = (newObject) => {
	const response = axios.post(baseURL, newObject);
	return response.then((response) => response.data);
};

export default {
	getAll,
	getUser,
	createUser
};
