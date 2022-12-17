/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is the navigation bar for our application
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

//Thunks
import {logoutThunk} from "../../services/thunks/users-thunk.js"

function Navigation() {
    const {pathname} = useLocation();
    //We want to update the navigation if the user is logged in. We also wnat to update even further if they are an admin
    const {currentUser, isAdmin} = useSelector(state => state.users);

    const dispatch = useDispatch();

    //When we logout call the thunk to remove our currentUser
    function logoutClickHandler(){
        dispatch(logoutThunk(currentUser));
    }

    return (
        <div className="col-12 my-2">
            <div className="d-flex justify-content-between">
                {currentUser && isAdmin && <h6>Welcome back: {currentUser.username} - (<Link to="/admin/users" className="wd-nav-link">Manage Users</Link>)</h6>}
                {currentUser && !isAdmin && <h6>Welcome back: {currentUser.username}</h6>}
                {currentUser && <h6><Link to="/profile" className="wd-nav-link">Profile</Link> | <Link to="/home" className="wd-nav-link" onClick={logoutClickHandler}>Logout</Link></h6> }
                {!currentUser && !isAdmin && <span></span>}
                {!currentUser && <h6><Link to="/login" className="wd-nav-link">Login</Link></h6>}
            </div>
            <div className="navbar navbar-expand">
                <div className="container justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/home" className={`nav-link ${pathname === "/home" ? "wd-active-link" : ''}`}>Home</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/search" className={`nav-link ${pathname === "/search" ? "wd-active-link" : ''}`}>Search</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/cocktails" className={`nav-link ${pathname === "/cocktails" ? "wd-active-link" : ''}`}>Cocktails</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border">
                            <Link to="/history-tours" className={`nav-link ${pathname === "/history-tours" ? "wd-active-link" : ''}`}>History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pairings" className={`nav-link ${pathname === "/pairings" ? "wd-active-link" : ''}`}>Pairings</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="wd-navigation-bottom-border" />
        </div>
    )
}

export default Navigation;