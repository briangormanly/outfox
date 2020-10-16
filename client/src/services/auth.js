import axios from 'axios';

const baseURL = 'http://localhost:8080/login';

export const userAuth = (newObject) => {
	const response = axios.post(baseURL, newObject);
	return response.then((response) => response.data);
};
