import axios from 'axios';

const usersUrl = 'http://localhost:8080';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/user`, user);
}

export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/users/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}


export const editUser = async (data, id) => {
    try{
        return await axios.put(`${usersUrl}/${id}`, data);
    } catch (error) {
        console.log('Error while calling editUser API', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser API', error.message);
    }
}