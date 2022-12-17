/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our admin page!
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Thunks
import { findAllUsersThunk, deleteUserThunk} from "../../services/thunks/users-thunk.js";

function AdminPage() {

    const { currentUser, isAdmin, allUsers } = useSelector((state) => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function userClickHandler(user) {
        navigate(`/profile/${user._id}`, {state:user});
    }

    function deleteClickHandler(uid){
        dispatch(deleteUserThunk(uid));
    }

    useEffect(() => {
        //Check to see the user is logged in AND an admin
        if (currentUser === null || isAdmin === false) {
            navigate('/home');
        }else{
            dispatch(findAllUsersThunk());
        }
    }, [dispatch, currentUser, isAdmin, allUsers, navigate]);

    return (
        <div className="wd-border py-3 px-2">
            <div className="text-center mb-3">
                <h6>
                    Hello {currentUser.internalUsername}! The table below contains all of the users in the database.
                    Click on a username to be redirected to that users profile page
                </h6>
                <hr className="wd-line-break" />
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover wd-table-font-size">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Joined Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => {
                            return (
                                <tr key={user._id} className="align-middle">
                                    <td className="wd-table-click" onClick={() => { userClickHandler(user)}}>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.accountType}</td>
                                    <td>{user.joinedDate.slice(0, 10)}</td>
                                    <td><button className="btn wd-delete-button" onClick={() => {deleteClickHandler(user._id)}} disabled={currentUser._id === user._id ? true : false}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default AdminPage;