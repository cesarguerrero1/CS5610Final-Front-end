/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our admin page!
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router";


function PublicProfile(){
    const {uid} = useParams();
    const [publicUser, setPublicUser] = useState(null);
    const {currentUser, allUsers, isAdmin} = useSelector((state) => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect({

    })

    return(
        <div></div>
    )

}

export default PublicProfile;