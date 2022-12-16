/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file allows us to make async calls to the server and then use those to update our state
 */

import {createAsyncThunk} from "@reduxjs/toolkit"

import * as cocktailService from "../cocktail-service.js";
import * as apiService from "../api-service.js";

//These first 3 thunks are for the 3rd party API search
export const searchDrinksByIngredientThunk = createAsyncThunk('cocktails/getThirdPartyCocktails', (ingredient) => {
    return apiService.searchDrinksByIngredient(ingredient);
})

export const searchDrinkByIdThunk = createAsyncThunk('cocktails/getThirdPartyCocktail', (id) => {
    return apiService.searchDrinkById(id);
})

//The rest of these are for our own database
export const createCocktailThunk = createAsyncThunk('cocktails/createCocktail', (cocktail) => {
    return cocktailService.createCocktail(cocktail);
});

export const findAllCocktailsThunk  = createAsyncThunk('cocktails/findAllCocktails', () => {
    return cocktailService.findAllCocktails();
});

export const updateCocktailThunk = createAsyncThunk('cocktails/updateCocktail', (cocktail) => {
    cocktailService.updateCocktail(cocktail)
    return cocktail;
});

export const deleteCocktailThunk = createAsyncThunk('cocktails/deleteCocktail', (id) => {
    cocktailService.deleteCocktail(id);
    return id;
});