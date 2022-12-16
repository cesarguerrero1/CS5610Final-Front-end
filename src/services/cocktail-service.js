/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file allows us to use axios to talk to our server
 */

import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE;
const COCKTAILS_API = `${BASE_URL}/cocktails`;


export const createCocktail = async(cocktail) => {
    const response = await axios.post(COCKTAILS_API, cocktail);
    return response.data
}

export const findAllCocktails = async () => {
    const response = await axios.get(COCKTAILS_API);
    return response.data
}

export const updateCocktail = async (cocktail) => {
    const response = await axios.put(`${COCKTAILS_API}/${cocktail._id}`, cocktail);;
    return response.data
}

export const deleteCocktail = async(id) => {
    const response = await axios.delete(`${COCKTAILS_API}/${id}`);
    return response.data
}