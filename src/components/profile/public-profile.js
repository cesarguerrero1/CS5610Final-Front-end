/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our admin page!
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

//Thunks
import { findAllUsersThunk } from "../../services/thunks/users-thunk.js";

//Components
import UserRecords from "./user-records.js";

function PublicProfile() {
    //There are two ways we happen upon a profile.
    //Either we type in their ID becuase we know them or we click a a link that gives us their information
    const { uid } = useParams();
    const {state} = useLocation();
    const { allUsers } = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const [publicUser, setPublicUser] = useState(null);
   

    //We need to get all of our users first THEN we can find the user of interest!
    useEffect(() => {
        if(state){
            //We click on a link as opposed to just typing in their ID
            setPublicUser(state);
        }else{
            //The state is null so it looks like someone just typed in a link!
            if(allUsers.length > 0){
                const user = allUsers.find((user) => { return user._id === uid });
                setPublicUser(user);
            }else{
                dispatch(findAllUsersThunk());
            }
        }
    }, [dispatch, allUsers, uid, state])

    return (
        <div>
            {publicUser &&
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="wd-border p-3">
                            <h5 className="text-decoration-underline">General Information</h5>
                            <h6><b>Name:</b> {publicUser.firstname + " " + publicUser.lastname}</h6>
                            <h6><b>Username:</b> {publicUser.username}</h6>
                            <h6><b>Account Type:</b> {publicUser.accountType}</h6>
                            {publicUser.accountType === "CONNOISSEUR" && <h6>Favorite Drink: {publicUser.favoriteDrink}</h6>}
                            {publicUser.accountType === "BARTENDER" && <div><h6><b>Currently Working at:</b> {publicUser.currentWorkplace}</h6><h6><b>Years Of Experience:</b>{publicUser.yearsOfExperience}</h6></div>}
                            {publicUser.accountType === "ADMIN" && <h6>This user is an admin! Contact them if you need any help with the website!</h6>}
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <UserRecords user={publicUser}/>
                    </div>
                </div>
            }
        </div>
    )

}

export default PublicProfile;