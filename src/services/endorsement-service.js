/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */


import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;
const ENDORSEMENTS_API = `${BASE_URL}/endorsements`;

export const createEndorsement = async(endorsement) => {
    const response = await axios.post(ENDORSEMENTS_API, endorsement);
    return response.data;
}

export const findAllMyEndorsements = async(uid) => {
    const response = await axios.get(`${BASE_URL}/users/${uid}/endorsements`);
    return response.data;
}

export const findAllEndorsements = async () => {
    const response = await axios.get(ENDORSEMENTS_API);
    return response.data
}

export const deleteEndorsement = async(eid) => {
    const response = await axios.delete(`${ENDORSEMENTS_API}/${eid}`);
    return response.data
}
