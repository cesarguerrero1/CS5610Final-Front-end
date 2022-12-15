/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file allows us to make async calls to the server and then use those to update our state
 */

import {createAsyncThunk} from "@reduxjs/toolkit"

import * as authService from "../auth-service.js";

//Call our service file to make an axios call to the server to see if someone is logged in 
export const isLoggedInThunk = createAsyncThunk('users/isLoggedIn', () => {
    const loggedInUser = authService.isLoggedIn();
    return loggedInUser;
})
