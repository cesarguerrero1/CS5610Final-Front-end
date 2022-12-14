/**
 * Cesar Guerrero
 * 10/14/22
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

//Components
import CheckUser from "./authentication/index.js";

//CSS
import "./index.css"

const store = configureStore({
    reducer:{}
})


function Mixologist(){
    return(
        <Provider store={store}>
            <CheckUser>
                <BrowserRouter>
                    <Routes>
                    </Routes>
                </BrowserRouter>
            </CheckUser>
        </Provider>
    )
}

export default Mixologist