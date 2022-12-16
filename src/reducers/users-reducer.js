/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file creates the reducer we will be using to house all of the user information
 */

import {createSlice} from "@reduxjs/toolkit";

//Import Thunks
import { isLoggedInThunk, loginThunk, logoutThunk, registerThunk, findAllUsersThunk, updateUserThunk, deleteUserThunk} from "../services/thunks/users-thunk.js";

//This is the initial state of our program
const initialState = {
    loginAttemptFailed: false,
    isAdmin: false,
    currentUser: null,
    allUsers:[],
}

const userSlice = createSlice({
    name:"users",
    initialState:initialState,

    //This will allow us to handle all of the async calls
    extraReducers:{
        //Check if user is logged in 
        [isLoggedInThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            if(state.currentUser.accountType === "ADMIN"){
                state.isAdmin = true;
            }
            return
        },
        [isLoggedInThunk.rejected]: (state, action) => {
            state.currentUser = null;
            state.isAdmin = false;
            return
        },

        //Attempt to log the user in
        [loginThunk.fulfilled]: (state, action) =>{
            state.currentUser = action.payload;
            state.loginAttemptFailed = false;
            //Check if they are an admin
            if(state.currentUser.accountType === "ADMIN"){
                state.isAdmin = true;
            }
            alert("Successful Login! Redirecting you to home!");
            return
        },
        [loginThunk.rejected]: (state, action) =>{
            state.loginAttemptFailed = true;
            alert("The given username and/or password are invalid");
            return;
        },

        //Log the user out
        [logoutThunk.fulfilled]: (state, action) =>{
            state.currentUser = null;
            state.loginAttemptFailed = false;
            state.isAdmin = false;
            return
        },

        //Regiser a user
        [registerThunk.fulfilled]: (state, action) =>{
            state.allUsers.push(action.payload);
            alert('The user was successfully created!');
            window.location.reload();
            return;
        },
        [registerThunk.rejected]: (state, action) =>{
            alert("The given username is taken! Please input a different username.");
            return
        },

        //Get all users
        [findAllUsersThunk.fulfilled]: (state, action) =>{
            state.allUsers = action.payload;
            return;
        },
        [findAllUsersThunk.rejected]: (state, action) =>{
            return
        },

        //Update a user
        [updateUserThunk.fulfilled]: (state, action) =>{
            const index = state.allUsers.findIndex((user) => {
                return user._id === action.payload._id;
            })
            state.allUsers[index] = action.payload;
            //We may potentially be updating our own file so let's check that
            if(action.payload._id === state.currentUser._id){
                state.currentUser = action.payload;
            }
            alert("Successful account update!");
            return
        },
        [updateUserThunk.rejected]: (state, action) =>{
            alert("Failed to update your account!");
            return
        },

        //Delete a user
        [deleteUserThunk.fulfilled]: (state, action) =>{
            state.allUsers = state.allUsers.filter((user) => {
                return user._id !== action.payload;
            })
            alert("User successfully deleted!");
            return
        },
        [deleteUserThunk.rejected]: (state, action) =>{
            alert("User deletion failed!");
            return
        },

    }
})


export default userSlice.reducer;