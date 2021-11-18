import axios from 'axios';

const assignmentURL = 'http://localhost:8080/api/assignments';
const resourceURL = 'http://localhost:8080/api/resources';

// Assignments
const createAssignment= async (newAssignmentObject) => {
    const response = await axios.post(assignmentURL, newAssignmentObject, {
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    return response.data;
};

const deleteAssignment = async (id) => {
    const response = await axios.delete(`${assignmentURL}/${id}`);
    return response.data;
};

const editAssignment = async (id, newObject) => {
    const response = await axios.put(`${assignmentURL}/${id}`, newObject);
    return response.data;
};

const getAssignmentData = async (id) => {
    const response = await axios.get(`${assignmentURL}/${id}`);
    return response.data;
};

//__________________________________________________________________________________

// RESOURCES
const createResource = async (newResourceObject) => {
	const response = await axios.post(resourceURL, newResourceObject, {
		headers : {
			'Content-Type' : 'multipart/form-data'
		}
	});
	return response.data;
};

const deleteResource = async (id) => {
	const response = await axios.delete(`${resourceURL}/${id}`);
	return response.data;
};

const editResource = async (id, newObject) => {
	const response = await axios.put(`${resourceURL}/${id}`, newObject);
	return response.data;
};

const downloadResource = async (id, type, name, fileName) => {
	axios({
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
	const response = await axios.get(`${resourceURL}/${id}`);
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