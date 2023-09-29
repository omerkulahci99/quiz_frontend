import axios from "axios";

export const getQuiz = (userId, quizId) => {
    return axios.get(`http://localhost:8080/api/1.0/quizzes/${userId}/${quizId}`);

    // http://localhost:8080/api/1.0/quizzes/4/3
}

export const getQuizzes = (userId) => {
    return axios.get(`http://localhost:8080/api/1.0/user-quiz-relations/user/${userId}`);
}



export const getUserQuizRelation = (userId, quizId) => {
    return axios.get(`http://localhost:8080/api/1.0/user-quiz-relations/user/${userId}/${quizId}`);
}

export const finishTheQuiz = (quizBody) => {
    return axios.put(`http://localhost:8080/api/1.0/user-quiz-relations/update`, quizBody);
}

