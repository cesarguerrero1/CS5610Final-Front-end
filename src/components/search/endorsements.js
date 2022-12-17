/**
 * Cesar Guerrero
 * 12/16/22
 * CS5610 - Final Project
 * 
 * @file Endorsements
 */

import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

function Endorsements({did}){

    const {currentUser} = useSelector(state => state.users);

    const dispatch = useDispatch();
    
    function endorseClickHandler() {
        //We need to call an endorsement THUNK so that we can endorse this drink by a bartender!
        console.log(currentUser);

    }   

    useEffect(() => {
        //Call all of the endorsements!
    })
    return(
        <div className="my-5">
            <div className="my-5">
                <h2 className="text-center">Endorsements By Bartenders</h2>
                {currentUser && currentUser.accountType === "BARTENDER" && 
                    <button className="btn wd-button w-25 mx-auto my-3" onClick={endorseClickHandler}>Endorse</button>
                }
                <hr className="w-25 m-auto"></hr>
                <ul>
                </ul>
            </div>
        </div>
    )
}

export default Endorsements;