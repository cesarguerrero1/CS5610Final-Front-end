/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */


import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;
const TOUR_API = `${BASE_URL}/tours`;

export const createTour = async(tour) => {
    const response = await axios.post(TOUR_API, tour);
    return response.data;
}

export const findAllTours = async() => {
    const response = await axios.get(TOUR_API);
    return response.data;
}

export const deleteTour = async(tid) => {
    const response = await axios.delete(`${TOUR_API}/${tid}`);
    return response.data;
}