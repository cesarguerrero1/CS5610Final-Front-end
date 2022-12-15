/**
 * Cesar Guerrero
 * 10/14/22
 * CS5610 - Final Project
 * 
 * @file All this file does is handle checking if a user is logged in
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Thunk calls
import { isLoggedInThunk } from "../../services/thunks/users-thunk.js";

function CheckUser({children}){
    
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(isLoggedInThunk())
    }, [dispatch])
    
    return(children);
}

export default CheckUser;

