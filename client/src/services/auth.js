import axios from 'axios';
import axFactoryService from "./axFactory";
const baseURL = '/login';

export const userAuth = (newObject) => {
	let ax = axFactoryService.genAx();
	const response = ax.post(baseURL, newObject);
	return response.then((response) => response.data);
};

export default {
	userAuth
};
