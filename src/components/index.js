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
import reviewsReducer from "../reducers/reviews-reducer.js";
import endorsementsReducer from "../reducers/endorsements-reducer.js";
import pairingReducer from "../reducers/pairing-reducer.js";
import tourReducer from "../reducers/tour-reducer.js";

//Components
import CheckUser from "./authentication/index.js";
import Navigation from "./navigation/index.js";
import Home from "./home/index.js";
import Login from "./login/index.js";
import AdminPage from "./admin/index.js";
import PublicProfile from "./profile/public-profile.js";
import PrivateProfile from "./profile/private-profile.js";
import Search from "./search/search.js"
import Cocktails from "./cocktails/index.js"
import CocktailDetails from "./search/details.js"
import HistoryTour from "./histories/index.js"
import Pairing from "./pairings/index.js"

//CSS
import "./index.css"

const store = configureStore({
    reducer:{
        users: usersReducer,
        cocktails: cocktailsReducer,
        reviews: reviewsReducer,
        endorsements: endorsementsReducer,
        tours: tourReducer,
        pairings: pairingReducer
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
                            <Route path="/history-tours" element={<HistoryTour/>}/>
                            <Route path="/pairings" element={<Pairing/>}/>
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
            </CheckUser>
        </Provider>
    )
}

export default Mixologist;