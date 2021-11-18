import axios from 'axios';

const baseURL = '/api/friends';

const getAll = () => {
	const response = axios.get(baseURL);
	return response.then((response) => response.data);
};

const sendFriendRequest = (newObject) => {
	const response = axios.post(baseURL, newObject);
	return response.then((response) => response.data);
};

const acceptFriendRequest = (id) => {
	const response = axios.put(`${baseURL}/${id}`, { status: 'a' });
	return response.then((response) => response.data);
};

const getFriendList = (id) => {
	const response = axios.get(`${baseURL}/accepted/${id}`);
	return response.then((response) => response.data);
};

const removeFriend = (id) => {
	const response = axios.delete(`${baseURL}/${id}`);
	return response.then((response) => response.data);
};

export default {
	getAll,
	sendFriendRequest,
	acceptFriendRequest,
	getFriendList,
	removeFriend
};
