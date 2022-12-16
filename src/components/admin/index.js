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
import { findAllUsersThunk } from "../../services/thunks/users-thunk";

function AdminPage() {

    const { currentUser, isAdmin, allUsers } = useSelector((state) => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function userRowClickHandler(user) {
        navigate(`/profile/${user._id}`, { state: user });
    }

    useEffect(() => {
        //Check to see the user is logged in AND an admin
        if (currentUser === null || isAdmin === false) {
            navigate('/home');
        }
        dispatch(findAllUsersThunk());
    })

    return (
        <div className="wd-border py-3 px-2">
            <div className="text-center mb-3">
                <h6>
                    The table below contains all of the users in the database.
                    Click on any of the rows to be redirected to their profile page
                </h6>
                <hr className="w-50 m-auto" />
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover wd-table-font-size">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Joined Date</th>
                            <th>Account Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => {
                            return (
                                <tr key={user._id} className="align-middle" onClick={() => { userRowClickHandler(user) }}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.accountType}</td>
                                    <td>{user.joinedDate.slice(0, 10)}</td>
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