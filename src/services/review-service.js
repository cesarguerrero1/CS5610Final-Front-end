/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */


import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE;
const REVIEWS_API = `${BASE_URL}/reviews`;

export const createReview = async(review) => {
    const response = await axios.post(REVIEWS_API, review);
    return response.data;
}

export const findAllMyReviews = async(uid) => {
    const response = await axios.get(`${BASE_URL}/users/${uid}/reviews`);
    return response.data;
}

export const findAllReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    return response.data
}

export const deleteReview = async(rid) => {
    const response = await axios.delete(`${REVIEWS_API}/${rid}`);
    return response.data
}
