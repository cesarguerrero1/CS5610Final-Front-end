/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our homepage! Display anonymous stuff if the user is not logged in! Otherwise show their created drinks and musings
 */

import React from "react";
import { useSelector } from "react-redux";

function Home(){
    const {currentUser} = useSelector(state => state.users);

    //The bigges thing is that if someone is logged in we will display something totally different
    return(
        <div>
            {currentUser && <div>This user is logged in!</div>}
            {!currentUser && <div>This user is not logged in!</div>}
        </div>
    )
}

export default Home;