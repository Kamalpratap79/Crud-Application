import axios from 'axios';

const usersUrl = 'http://localhost:8080';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/user`, user);
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}/users`);
};

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/users/${id}`);
};


export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/user`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/user/${id}`);
}