import axios from 'axios';
import axFactoryService from "./axFactory";

const assignmentURL = '/api/assignments';
const resourceURL = '/api/resources';

let ax = axFactoryService.genAx();

// Assignments
const createAssignment= async (newAssignmentObject) => {
    const response = await ax.post(assignmentURL, newAssignmentObject, {
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    return response.data;
};

const deleteAssignment = async (id) => {
    const response = await ax.delete(`${assignmentURL}/${id}`);
    return response.data;
};

const editAssignment = async (id, newObject) => {
    const response = await ax.put(`${assignmentURL}/${id}`, newObject);
    return response.data;
};

const getAssignmentData = async (id) => {
    const response = await ax.get(`${assignmentURL}/${id}`);
    return response.data;
};

//__________________________________________________________________________________

// RESOURCES
const createResource = async (newResourceObject) => {
	const response = await ax.post(resourceURL, newResourceObject, {
		headers : {
			'Content-Type' : 'multipart/form-data'
		}
	});
	const newResID = response.data.resource.id;
	console.log("Created a resource with the id of: " + newResID);
	let link =
	  "/newResource?resource=" + parseInt(newResID) + "";
	const resp = await ax.get(link);
	return response.data;
};

const deleteResource = async (id) => {
	const response = await ax.delete(`${resourceURL}/${id}`);
	return response.data;
};

const editResource = async (id, newObject) => {
	const response = await ax.put(`${resourceURL}/${id}`, newObject);
	return response.data;
};

const downloadResource = async (id, type, name, fileName) => {
	ax({
		url          : `${resourceURL}/download/${id}`,
		method       : 'GET',
		responseType : 'blob' // important
	}).then((response) => {
		console.log(response);
		const url = window.URL.createObjectURL(new Blob([ response.data ]));
		const link = document.createElement('a');
		link.href = url;

		link.setAttribute('download', fileName);
		document.body.appendChild(link);
		link.click();
	});
};

const getResourceData = async (id) => {
	const response = await ax.get(`${resourceURL}/${id}`);
	return response.data;
};

export default {
    createAssignment,
    deleteAssignment,
    editAssignment,
    getAssignmentData,
    createResource,
    deleteResource,
    editResource,
    downloadResource,
    getResourceData
};