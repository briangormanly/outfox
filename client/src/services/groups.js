import axios from 'axios';

const groupsURL = '/api/groups';
const resourceURL = '/api/resources';
const fileURL = '/api/file';

// GROUPS  ------------------------------------------------------------------------------------------
const createGroup = async (newGroupObject) => {
	const response = await axios.post(groupsURL, newGroupObject);
	return response.data;
};

const getGroupData = async (id) => {
	const response = await axios.get(`${groupsURL}/${id}`);
	return response.data;
};

const deleteGroup = async (id) => {
	const response = await axios.delete(`${groupsURL}/${id}`);
	return response.data;
};

const editGroup = async (id, newObject) => {
	const response = await axios.put(`${groupsURL}/${id}`, newObject);
	return response.data;
};
const setfavoriteGroup = async (id,grpid)=>{
	const response =  await axios.get(`${groupsURL}/addfavgrp/${id}/${grpid}`);
	return response.status;
};
const remFavoriteGroup = async(id,grpid)=>{
	const response =  await axios.get(`${groupsURL}/remfavgrp/${id}/${grpid}`);
	return response.status;
}
//__________________________________________________________________________________

// RESOURCES
const createResource = async (newResourceObject) => {
	const response = await axios.post(resourceURL, newResourceObject, {
		headers : {
			'Content-Type' : 'multipart/form-data'
		}
	});
	const newResID = response.data.resource.id;
	console.log("Created a resource with the id of: "+newResID);
	let link = "http://96.249.211.3:105/newResource?resource=" +parseInt(newResID) + "";
	const resp = await axios.get(link);
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
const setfavoriteResource = async (id,recid)=>{
	const response =  await axios.get(`${groupsURL}/addfavrec/${id}/${recid}`);
	return response.status;
};
const remFavoriteResource = async (id,recid)=>{
	const response =  await axios.get(`${groupsURL}/remfavrec/${id}/${recid}`);
	return response.status;
};
export default {
	createGroup,
	getGroupData,
	createResource,
	deleteGroup,
	deleteResource,
	editResource,
	editGroup,
	getResourceData,
	downloadResource,
	setfavoriteGroup,
	remFavoriteGroup,
	setfavoriteResource,
	remFavoriteResource
};
