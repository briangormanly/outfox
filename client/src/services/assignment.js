import axios from 'axios';

const assignmentURL = 'http://localhost:8080/api/assignments';

// Assignments
const createAssignment= async (newAssignmentObject) => {
    const response = await axios.post(assignmentURL, newAssignmentObject, {
        headers : {
            'Content-Type' : 'multipart/form-data'
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

export default {
    createAssignment,
    deleteAssignment,
    editAssignment,
    getAssignmentData
};