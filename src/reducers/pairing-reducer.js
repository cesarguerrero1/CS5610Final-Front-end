/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Reducer for pairing
 */

import { createSlice } from "@reduxjs/toolkit";

import { createPairThunk, findAllPairingsThunk, deletePairThunk } from "../services/thunks/pairing-thunk.js";

const initialState = {
    allPairs: []
}

const pairSlice = createSlice({
    name: 'pairings',
    initialState: initialState,

    extraReducers: {
        //Find
        [findAllPairingsThunk.fulfilled]: (state, action) => {
            state.allPairs = action.payload;
            return
        },
        [findAllPairingsThunk.rejected]: (state, action) => {
            state.allPairs = [];
            return
        },

        //Create
        [createPairThunk.fulfilled]: (state, action) => {
            state.allPairs.push(action.payload);
            alert('Pair Created Successfully');
            return
        },
        [createPairThunk.rejected]: (state, action) => {
            alert('Pair Creation Failure');
            return
        },

        //Delete
        [deletePairThunk.fulfilled]: (state, action) => {
            state.allPairs = state.allPairs.filter((pair) => {
                return pair._id !== action.payload;
            })
            alert('Successful Deletion');
            return
        },
        [deletePairThunk.rejected]: (state, action) => {
            alert("Failed to delete Pair");
            return
        },
    }
})

export default pairSlice.reducer;