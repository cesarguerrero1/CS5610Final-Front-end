/**
 * Cesar Guerrero
 * 10/14/22
 * CS5610 - Final Project
 * 
 * @file All this file does is handle checking if a user is logged in
 */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function CheckUser({children}){
    /*

    NOTE: We want to call our reducer to ping the server and see if we are logged in!

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(isLoggedInThunk())
    }, [dispatch])
    */
    return(children);
}

export default CheckUser();

