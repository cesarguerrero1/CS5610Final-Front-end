/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Pairings Page
 */

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import CreatePairing from "./pairing-form.js"

function Pairing(){

    const dispatch = useDispatch();

    useEffect(() => {

    })

    return(
        <div>
            <CreatePairing/>
        </div>
    )

}

export default Pairing;