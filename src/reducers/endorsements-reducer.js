/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Reducer for endorsements
 */

import {createSlice} from "@reduxjs/toolkit";

//Thunks
import { findAllMyEndorsementsThunk,  findAllEndorsementsThunk, createEndorsementThunk, deleteEndorsementThunk} from "../services/thunks/endorsements-thunk.js";

const initialState = {
    allEndorsements: [],
    myEndorsements: []
}

const endorsementSlice = createSlice({
    name:'endorsements',
    initialState:initialState,

    extraReducers:{
        [findAllMyEndorsementsThunk.fulfilled]: (state, action) => {
            state.myEndorsements = action.payload;
            return
        },
        [findAllMyEndorsementsThunk.rejected]: (state, action) => {
            state.myEndorsements = [];
            return
        },

        [findAllEndorsementsThunk.fulfilled]: (state, action) => {
            state.allEndorsements = action.payload;
            return
        },
        [findAllEndorsementsThunk.rejected]: (state, action) => {
            state.allEndorsements = [];
            return
        },

        [createEndorsementThunk.fulfilled]: (state, action) => {
            state.allEndorsements.push(action.payload);
            state.myEndorsements.push(action.payload);
            alert('Endorsement successfully created!');
            return
        },
        [createEndorsementThunk.rejected]: (state, action) => {
            alert("Endorsement creation Failure");
            return
        },

        [deleteEndorsementThunk.fulfilled]: (state, action) => {
            state.allEndorsements = state.allEndorsements.filter((endorsement) => {
                return endorsement._id !== action.payload;
            })
            state.myEndorsements = state.myEndorsements.filter((endorsement) => {
                return endorsement._id !== action.payload;
            })
            alert('Successful Deletion');
            return
        },
        [deleteEndorsementThunk.rejected]: (state, action) => {
            alert("Failed to delete Endorsement!");
            return
        },

    }
})

export default endorsementSlice.reducer;