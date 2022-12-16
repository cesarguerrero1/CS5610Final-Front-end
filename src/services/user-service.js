/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file allows us to use axios to talk to our server
 */

import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
const USERS_API = `${BASE_URL}/users`;

export const registerUser = async (user) => {
    const response = await axios.post(USERS_API, user);
    return response.data
}

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data
}

export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data
}

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USERS_API}/${uid}`);
    return response.data;
}
