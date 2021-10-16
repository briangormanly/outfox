import axios from 'axios';

const LessonURL = 'http://localhost:8080/api/lessons';


// Lessons
const createLesson= async (newLessonObject) => {
    const response = await axios.post(LessonURL, newLessonObject, {
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    });
    return response.data;
};

const deleteLesson = async (id) => {
    const response = await axios.delete(`${LessonURL}/${id}`);
    return response.data;
};

const editLesson = async (id, newObject) => {
    const response = await axios.put(`${LessonURL}/${id}`, newObject);
    return response.data;
};

const getLessonData = async (id) => {
    const response = await axios.get(`${LessonURL}/${id}`);
    return response.data;
};

export default {
    createLesson,
    deleteLesson,
    editLesson,
    getLessonData
};