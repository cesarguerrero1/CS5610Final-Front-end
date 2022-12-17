/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Reducer for tours
 */

import {createSlice} from "@reduxjs/toolkit";

import {findAllToursThunk, createTourThunk, deleteTourThunk} from "../services/thunks/tour-thunk.js";

const initialState = {
    allTours: []
}

const tourSlice = createSlice({
    name:'tours',
    initialState:initialState,

    extraReducers:{
        //Find
        [findAllToursThunk.fulfilled]:(state, action) => {
            state.allTours = action.payload;
            return
        }, 
        [findAllToursThunk.rejected]:(state, action) => {
            state.allTours = [];
            return
        }, 

        //Create
        [createTourThunk.fulfilled]:(state, action) => {
            state.allTours.push(action.payload);
            alert('Tour Created Successfully');
            return
        }, 
        [createTourThunk.rejected]:(state, action) => {
            alert('Tour creation Failure');
            return
        }, 

        //Delete
        [deleteTourThunk.fulfilled]:(state, action) => {
            state.allTours = state.allTours.filter((tour) => {
                return tour._id !== action.payload;
            })
            alert('Successful Deletion');
            return
        }, 
        [deleteTourThunk.rejected]:(state, action) => {
            alert('Failed to delete Tour!');
            return
        }, 
    }
})

export default tourSlice.reducer;