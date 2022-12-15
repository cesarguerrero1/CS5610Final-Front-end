/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file allows us to use axios to talk to our server
 */

import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
const AUTH_API = `${BASE_URL}/api/auth`;

//Using cookies requires changing how we use axios
const api = axios.create({
    withCredentials: true,
})

async function isLoggedIn(){
    const response = await api.post(`${AUTH_API}/profile`);
    return response.data
}

async function login(credentials){
    const response = await api.post(`${AUTH_API}/login`, credentials);
    return response.data
}

async function logout(user){
    const response = await api.post(`${AUTH_API}/logout`, user);
    return response.data
}


export {login, logout, isLoggedIn}