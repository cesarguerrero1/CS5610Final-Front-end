/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is the navigation bar for our application
 */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
    //We want to update the navigation if the user is logged in and/or an admin
    const {currentUser, isAdmin} = useSelector(state => state.users);

    return (
        <div>
            <div className="col-12 my-2">
                <div className="d-flex justify-content-between">
                    {currentUser && isAdmin && <span><Link to="/users">Manage Users</Link></span>}
                    {!currentUser && !isAdmin && <span></span>}
                    {!currentUser && <span><Link to="/login">Login</Link></span>}
                    {currentUser && <span>Welcome back {currentUser.username}<Link to="/profile">Profile</Link></span>}
                </div>
            </div>
            <div className="navbar navbar-expand">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item wd-navigation-item-border px-3">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border px-3">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border px-3">
                            <Link to="/cocktails" className="nav-link">Cocktails</Link>
                        </li>
                        <li className="nav-item wd-navigation-item-border px-3">
                            <Link to="/tours" className="nav-link">Histories</Link>
                        </li>
                        <li className="nav-item px-3">
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