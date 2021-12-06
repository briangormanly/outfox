import axios from "axios";
import axFactoryService from "./axFactory";

const baseURL = "/api/share";
const groupShareURL = `${baseURL}/group`;
const resourceShareURL = `${baseURL}/resource`;
const lessonShareURL = `${baseURL}/lesson`;
const assignmentShareURL = `${baseURL}/assignment`;
let ax = axFactoryService.genAx();

const getSharedGroups = (id) => {
  const response = ax.get(`${groupShareURL}/${id}`);
  return response.then((response) => response.data);
};

const shareGroup = (newObject) => {
  const response = ax.post(groupShareURL, newObject);
  return response.then((response) => response.data);
};

const deleteSharedGroup = (id) => {
  const response = ax.delete(`${groupShareURL}/${id}`);
  return response.then((response) => response.data);
};

const deleteSharedResource = (id) => {
  const response = ax.delete(`${resourceShareURL}/${id}`);
  return response.then((response) => response.data);
};

const getSharedResources = (id) => {
  const response = ax.get(`${resourceShareURL}/${id}`);
  return response.then((response) => response.data);
};

const shareResource = (newObject) => {
  const response = ax.post(resourceShareURL, newObject);
  return response.then((response) => response.data);
};

const deleteSharedAssignments = (id) => {
  const response = ax.delete(`${assignmentShareURL}/${id}`);
  return response.then((response) => response.data);
};

const getSharedAssignments = (id) => {
  const response = ax.get(`${assignmentShareURL}/${id}`);
  return response.then((response) => response.data);
};

const shareAssignments = (newObject) => {
  const response = ax.post(assignmentShareURL, newObject);
  return response.then((response) => response.data);
};

const deleteSharedLessons = (id) => {
  const response = ax.delete(`${lessonShareURL}/${id}`);
  return response.then((response) => response.data);
};

const getSharedLessons = (id) => {
  const response = ax.get(`${lessonShareURL}/${id}`);
  return response.then((response) => response.data);
};

const shareLessons = (newObject) => {
  const response = ax.post(lessonShareURL, newObject);
  return response.then((response) => response.data);
};

export default {
  getSharedGroups,
  shareGroup,
  getSharedResources,
  shareResource,
  deleteSharedResource,
  deleteSharedGroup,
  getSharedAssignments,
  shareAssignments,
  deleteSharedAssignments,
  getSharedLessons,
  shareLessons,
  deleteSharedLessons,
};
