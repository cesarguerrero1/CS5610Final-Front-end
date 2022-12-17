/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */


import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;
const PAIRING_API = `${BASE_URL}/pairings`;

export const createPairing = async(pairing) => {
    const response = await axios.post(PAIRING_API, pairing);
    return response.data;
}

export const findAllPairings = async() => {
    const response = await axios.get(PAIRING_API);
    return response.data;
}

export const deletePair = async(pid) => {
    const response = await axios.delete(`${PAIRING_API}/${pid}`);
    return response.data;
}