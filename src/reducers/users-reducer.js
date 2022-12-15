/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file creates the reducer we will be using to house all of the user information
 */

import {createSlice} from "@reduxjs/toolkit";

//Import Thunks
import { isLoggedInThunk } from "../services/thunks/users-thunk.js";

//This is the initial state of our program
const initialState = {
    loginAttemptFailed: false,
    isAdmin: false,
    currentUser: null,
}

const userSlice = createSlice({
    name:"users",
    initialState:initialState,

    //This will allow us to handle all of the async calls
    extraReducers:{
        [isLoggedInThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            if(state.currentUser.accountType === "ADMIN"){
                state.isAdmin = true;
            }
        },
        [isLoggedInThunk.rejected]: (state, action) => {
            state.currentUser = null;
            state.isAdmin = false;
        }
    }
})


export default userSlice.reducer;