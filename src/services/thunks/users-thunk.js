/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/15/22
 * 
 * @file This file allows us to make async calls to the server and then use those to update our state
 */

import {createAsyncThunk} from "@reduxjs/toolkit"

import * as authService from "../auth-service.js";
import * as userService from "../user-service.js";

//Call our service file to make an axios call to the server to see if someone is logged in 
export const isLoggedInThunk = createAsyncThunk('users/isLoggedIn', () => {
    const loggedInUser = authService.isLoggedIn();
    return loggedInUser;
})

//Try and log someone in!
export const loginThunk = createAsyncThunk('users/login', (credentials) => {
    const loggedInUser = authService.login(credentials);
    return loggedInUser;
})

//Logout
export const logoutThunk = createAsyncThunk('users/logout', (user) => {
    return authService.logout(user);
})

//Register a user
export const registerThunk = createAsyncThunk('users/register', (user) => {
    return userService.registerUser(user);
})

//Get all users!
export const findAllUsersThunk = createAsyncThunk('users/findAllUsers', () => {
    return userService.findAllUsers();
})

//Update a user!
export const updateUserThunk = createAsyncThunk('users/updateUser', (user) => {
    userService.updateUser(user);
    return user;
})

//Delete a user!
export const deleteUserThunk = createAsyncThunk('users/deleteUser', (uid) => {
    userService.deleteUser(uid);
    return uid;
})
