import axios from "axios";
import axFactoryService from "./axFactory";
const baseURL = "/api/friends";

let ax = axFactoryService.genAx();

const getAll = () => {
  const response = ax.get(baseURL);
  return response.then((response) => response.data);
};

const sendFriendRequest = (newObject) => {
  const response = ax.post(baseURL, newObject);
  return response.then((response) => response.data);
};

const acceptFriendRequest = (id) => {
  const response = ax.put(`${baseURL}/${id}`, { status: "a" });
  return response.then((response) => response.data);
};

const getFriendList = (id) => {
  const response = ax.get(`${baseURL}/accepted/${id}`);
  return response.then((response) => response.data);
};

const removeFriend = (id) => {
  const response = ax.delete(`${baseURL}/${id}`);
  return response.then((response) => response.data);
};

export default {
  getAll,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendList,
  removeFriend,
};
