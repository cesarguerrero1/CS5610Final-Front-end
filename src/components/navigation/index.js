/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is the navigation bar for our application
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Thunks
import {logoutThunk} from "../../services/thunks/users-thunk.js"

function Navigation() {
    //We want to update the navigation if the user is logged in and/or an admin
    const {currentUser, isAdmin} = useSelector(state => state.users);

    const dispatch = useDispatch();


    function logoutClickHandler(){
        dispatch(logoutThunk(currentUser));
    }

    return (
        <div className="col-12 my-2">
            <div>
                <div className="d-flex justify-content-between">
                    {currentUser && isAdmin && <h5>Welcome back: {currentUser.username} - (<Link to="/users" className="wd-nav-link">Manage Users</Link>)</h5>}
                    {!currentUser && !isAdmin && <span></span>}
                    {!currentUser && <h5><Link to="/login" className="wd-nav-link">Login</Link></h5>}
                    {currentUser && !isAdmin && <h5>Welcome back: {currentUser.username}</h5>}
                    {currentUser && <h5><Link to="/profile" className="wd-nav-link">Profile</Link> | <Link to="/home" className="wd-nav-link" onClick={logoutClickHandler}>Logout</Link></h5> }
                </div>
            </div>
            <div className="navbar navbar-expand">
                <div className="container justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/cocktails" className="nav-link">Cocktails</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/tours" className="nav-link">Histories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pairings" className="nav-link">Pairings</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="wd-navigation-bottom-border" />
        </div>
    )
}

export default Navigation;