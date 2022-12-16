/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file allows us to use axios to talk to our third-party API
 */

import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1"

export const searchDrinksByIngredient = async (ingredient) => {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    return response.data.drinks;
}

export const searchDrinkById = async (id) => {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.drinks[0];
}
