/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file allows us to use axios to talk to our third-party API
 */

import axios from "axios";

export const searchDrinksByIngredient = async (ingredient) => {
    const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ingredient}`)
    console.log(response.data);
    return response.data;
}

export const searchDrinkById = async (id) => {
    const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(response.data);
    return response.data;
}