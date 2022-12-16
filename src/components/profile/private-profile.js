/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our admin page!
 */

import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { updateUserThunk } from "../../services/thunks/users-thunk.js";

function PrivateProfile() {
    const { currentUser } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState(currentUser.firstname);
    const [lastname, setLastname] = useState(currentUser.lastname);
    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email);
    const [favoriteDrink, setFavoriteDrink] = useState(currentUser.favoriteDrink);
    const [yearsOfExperience, setYearsOfExperience] = useState(currentUser.yearsOfExperience);
    const [currentWorkplace, setCurrentWorkplace] = useState(currentUser.currentWorkplace);
    const [internalUsername, setInternalUsername] = useState(currentUser.internalUsername);

    function updateProfileClickHandler() {
        dispatch(updateUserThunk({
            ...currentUser,
            firstname,lastname,username,email,favoriteDrink,yearsOfExperience,currentWorkplace,internalUsername
        }))
    }

    //The private profile differs from the other profile in that we can update our own things
    return (
        <div>
            {currentUser &&
                <div>
                    <div className="=col-12">
                        <div className="w-75 m-auto mt-5 py-5 px-3 wd-form-border">
                            <div className="m-3">
                                <label for="updateFirstname" className="form-label">First Name</label>
                                <input id="updateFirstname" className="form-control" type="text" onChange={((event) => {setFirstname(event.target.value)})} value={firstname}></input>
                            </div>
                            <div className="m-3">
                                <label for="updateLastname" className="form-label">Last Name</label>
                                <input id="updateLastname" className="form-control" type="text" onChange={((event) => {setLastname(event.target.value)})} value={lastname}></input>
                            </div>
                            <div className="m-3">
                                <label for="updateUsername" className="form-label">Username</label>
                                <input id="updateUsername" className="form-control" type="text" onChange={((event) => {setUsername(event.target.value)})} value={username}></input>
                            </div>
                            <div className="m-3">
                                <label for="updatePassword" className="form-label">Password (READ ONLY)</label>
                                <input id="updatePassword" className="form-control" type="text" value={currentUser.password} readOnly></input>
                            </div>
                            <div className="m-3">
                                <label for="updateEmail" className="form-label">Email</label>
                                <input id="updateEmail" className="form-control" type="text" value={email} onChange={((event) => {setEmail(event.target.value)})}></input>
                            </div>
                            <div className="m-3">
                                <label for="updateAccountType"className="form-label">Account Type (READ ONLY)</label>
                                <input id="updateAccountType" className="form-control" type="text" value={currentUser.accountType} readOnly></input>
                            </div>
                            {currentUser.accountType === "CONNOISSEUR" &&
                                <div className="m-3">
                                    <label for="updateDrink" className="form-label">Favorite Drink</label>
                                    <input id="updateDrink" className="form-control" type="text" value={favoriteDrink} onChange={((event) => {setFavoriteDrink(event.target.value)})}></input>
                                </div>
                            }
                            {currentUser.accountType === "BARTENDER" &&
                                <div>
                                    <div className="m-3">
                                        <label for="updateYears"className="form-label">Years of Experience</label>
                                        <input id="updateYears" className="form-control" type="text" value={yearsOfExperience} onChange={((event) => {setYearsOfExperience(event.target.value)})}></input>
                                    </div>
                                    <div className="m-3">
                                        <label for="updateWorkplace" className="form-label">Current Workplace</label>
                                        <input id="updateWorkplace" className="form-control" type="text" value={currentWorkplace} onChange={((event) => {setCurrentWorkplace(event.target.value)})}></input>
                                    </div>
                                </div>
                            }
                            {currentUser.accountType === "ADMIN" &&
                                <div className="m-3">
                                    <label for="updateInternalUsername" className="form-label">Internal Username</label>
                                    <input id="updateInternalUsername" className="form-control" type="text" value={internalUsername} onChange={((event) => {setInternalUsername(event.target.value)})}></input>
                                </div>
                            }
                            <button className='btn wd-update-button' onClick={updateProfileClickHandler}>Update</button>
                        </div>
                    </div>

                    <div className="=col-12">
                        <h5>My Cocktails</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Histories</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Pairings</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Reviews</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Endorsements</h5>
                    </div>
                </div>
            }
        </div>
    )
}

export default PrivateProfile;