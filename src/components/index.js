/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This is the main entry point into our front-end. We will be using React with the help
 * of bootstrap and redux to create the front-end user experience
 */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Redux
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

//Reducers
import usersReducer from "../reducers/users-reducer.js";
import cocktailsReducer from "../reducers/cocktails-reducer.js"

//Components
import CheckUser from "./authentication/index.js";
import Navigation from "./navigation/index.js";
import Home from "./home/index.js";
import Login from "./login/index.js";
import AdminPage from "./admin/index.js";
import PublicProfile from "./profile/public-profile.js";
import PrivateProfile from "./profile/private-profile.js";
//Have not visited the ones below just yet!
import Search from "./search/search.js"
import Cocktails from "./cocktails/index.js"
import CocktailDetails from "./search/details.js"

//CSS
import "./index.css"

const store = configureStore({
    reducer:{
        users: usersReducer,
        cocktails: cocktailsReducer
    }
})

function Mixologist(){
    return(
        <Provider store={store}>
            <CheckUser>
                <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <Navigation/>
                    </div>
                    <div className="row">
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/admin/users" element={<AdminPage/>}/>
                            <Route path="/profile" element={<PrivateProfile/>}/>
                            <Route path="/profile/:uid" element={<PublicProfile/>}/>
                            <Route path="/search/*" element={<Search/>}/>
                            <Route path="/cocktails" element={<Cocktails/>}/>
                            <Route path="/details/:cid" element={<CocktailDetails/>}/>
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
            </CheckUser>
        </Provider>
    )
}

export default Mixologist;