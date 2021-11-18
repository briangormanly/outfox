import axios from 'axios';

const baseURL = '/login';

export const userAuth = (newObject) => {
	const response = axios.post(baseURL, newObject);
	return response.then((response) => response.data);
};

export default {
	userAuth
};
