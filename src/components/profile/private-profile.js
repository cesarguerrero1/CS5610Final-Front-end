/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our private profile only we can see!
 */

import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Import Components
import EditProfile from "./edit-profile.js"
import UserRecords from "./user-records.js";

function PrivateProfile() {
    const { currentUser } = useSelector((state) => state.users);
    const navigate = useNavigate();

    //When the page loads look to see if we have our user!
    useEffect(() => {
        if(currentUser === null){
            navigate('/home');
        }
    });

    //The private profile differs from the other profile in that we can update our own things
    return (
        <div>
            {currentUser && <EditProfile/>}
            {currentUser && <UserRecords user={currentUser}/>}
        </div>
    )

}

export default PrivateProfile;