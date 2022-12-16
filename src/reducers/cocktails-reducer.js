/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file creates the reducer we will be using to house all of the cocktail information
 */

import {createSlice} from "@reduxjs/toolkit";

//Thunks
import { searchDrinksByIngredientThunk, searchDrinkByIdThunk, createCocktailThunk, findAllCocktailsThunk, updateCocktailThunk, deleteCocktailThunk} from "../services/thunks/cocktails-thunk.js";

const initialState = {
    searchedDrinks: [],
    detailedSearchDrink: null,
    searchError: false,
    databaseDrinks: [],
}

const cocktailSlice = createSlice({
    name:"cocktails",
    initialState:initialState,

    extraReducers:{
        //Get an array of drinks from 3rd party
        [searchDrinksByIngredientThunk.fulfilled]: (state, action) => {
            state.searchedDrinks = action.payload;
            state.searchError = false;
            return
        },
        [searchDrinksByIngredientThunk.rejected]: (state, action) => {
            state.searchError = false;
            return
        },

        //Get a specific drink from 3rd party
        [searchDrinkByIdThunk.fulfilled]: (state, action) => {
            state.detailedSearchDrink = action.payload;
            state.searchError = false;
        },
        [searchDrinkByIdThunk.rejected]: (state, action) => {
            state.detailedSearchDrink = null;
            state.searchError = true;
        },

        //Create a cocktail
        [createCocktailThunk.fulfilled]: (state, action) => {
            state.databaseDrinks.push(action.payload);
            alert('Cocktail successfully created!');
            return;
        },
        [createCocktailThunk.rejected]: (state, action) => {
            alert("Cocktail creation failure!");
            return;
        },

        //Find all cocktails
        [findAllCocktailsThunk.fulfilled]: (state, action) => {
            state.databaseDrinks = action.payload;
            return
        },
        [findAllCocktailsThunk.rejected]: (state, action) => {
            return
        },

        //Update a cocktail
        [updateCocktailThunk.fulfilled]: (state, action) => {
            const index = state.databaseDrinks.findIndex((cocktail) => {
                return cocktail._id === action.payload._id;
            })
            state.databaseDrinks[index] = action.payload._id;
            alert('Successful Cocktail update!');
            return
        },
        [updateCocktailThunk.rejected]: (state, action) => {
            alert('Failure to update Cocktail!');
            return
        },

        //Delete a cocktail
        [deleteCocktailThunk.fulfilled]: (state, action) => {
            state.databaseDrinks = state.databaseDrinks.filter((cocktail) => {
                return cocktail._id !== action.payload;
            })
            alert("Successful Cocktail Deletion");
            return
        },
        [deleteCocktailThunk.rejected]: (state, action) => {
            alert("Cocktail Deletion Failure!");
            return
        }

    }
})

export default cocktailSlice.reducer;