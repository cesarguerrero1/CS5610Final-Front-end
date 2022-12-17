/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/16/22
 * 
 * @file This file creates the reducer we will be using to house all of the cocktail information
 */

import {createSlice} from "@reduxjs/toolkit";

//Thunks
import { searchDrinksByIngredientThunk, searchDrinkByIdThunk, findAllCocktailsThunk, findMyCocktailsThunk, createCocktailThunk, deleteCocktailThunk} from "../services/thunks/cocktails-thunk.js";

const initialState = {
    apiDrinks: [],
    detailedApiDrink: null,
    allDatabaseDrinks: [],
    myDrinks:[]
}

const cocktailSlice = createSlice({
    name:"cocktails",
    initialState:initialState,

    extraReducers:{
        //Get an array of drinks from 3rd party
        [searchDrinksByIngredientThunk.fulfilled]: (state, action) => {
            state.apiDrinks = action.payload;
            state.detailedApiDrink = null;
            return
        },
        [searchDrinksByIngredientThunk.rejected]: (state, action) => {
            state.apiDrinks = [];
            state.detailedApiDrink = null;
            return
        },

        //Get a specific drink from 3rd party
        [searchDrinkByIdThunk.fulfilled]: (state, action) => {
            state.detailedApiDrink = action.payload;
            return
        },
        [searchDrinkByIdThunk.rejected]: (state, action) => {
            state.detailedApiDrink = null;
            return
        },

        //Find all cocktails
        [findAllCocktailsThunk.fulfilled]: (state, action) => {
            state.allDatabaseDrinks = action.payload;
            return
        },
        [findAllCocktailsThunk.rejected]: (state, action) => {
            state.allDatabaseDrinks = [];
            return
        },

        //Find my cocktails
        [findMyCocktailsThunk.fulfilled]:(state, action) => {
            state.myDrinks = action.payload;
            return
        },
        [findMyCocktailsThunk.rejected]: (state, action) => {
            state.myDrinks = [];
            return
        },

        //Create a cocktail
        [createCocktailThunk.fulfilled]: (state, action) => {
            state.allDatabaseDrinks.push(action.payload);
            state.myDrinks.push(action.payload);
            alert('Cocktail successfully created!');
            return;
        },
        [createCocktailThunk.rejected]: (state, action) => {
            alert("Cocktail creation failure!");
            return;
        },

        //Delete a cocktail
        [deleteCocktailThunk.fulfilled]: (state, action) => {
            state.allDatabaseDrinks = state.allDatabaseDrinks.filter((cocktail) => {
                return cocktail._id !== action.payload;
            })
            state.myDrinks = state.myDrinks.filter((cocktail) => {
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