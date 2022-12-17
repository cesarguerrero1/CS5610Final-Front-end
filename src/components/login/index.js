/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our login page!
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//THUNKS
import {loginThunk, registerThunk} from "../../services/thunks/users-thunk.js"


function Login() {
    const { currentUser } = useSelector(state => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //State Handling for Login
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    function loginClickHandler() {
        if (loginUsername === "" || loginPassword === "") {
            alert("You must input a username/password")
        } else {
            //Dispatch a call to see if this user is allowed to be logged in!
            dispatch(loginThunk({username:loginUsername, password:loginPassword}));
        }
    }

    //State Handling for Register
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('CONNOISSEUR');

    function registerClickHandler(){
        //Check core content
        if(firstname === "" || lastname === "" || registerUsername === "" || registerPassword === "" || email === ""){
            alert('You must provide inpute for every field in order to register');
        }else{
            //Dispatch call goes here!
            dispatch(registerThunk({firstname, lastname, username:registerUsername, password:registerPassword, email, accountType}))
        }

    }

    useEffect(() => {
        //We don't want a user to be on this page if they are logged in already!
        if (currentUser !== null) {
            navigate('/home');
        }
    })

    return (
        <div>
            <div className="col-12">
                <div className="w-50 m-auto my-5 py-5 px-3 wd-form-border">
                    <div className="text-center">
                        <h3>Login <i className="fas fa-cocktail"></i></h3>
                    </div>
                    <div>
                        <div className="m-3">
                            <label for="loginUsername" className="form-label">Username</label>
                            <input id="loginUsername" className="form-control" placeholder="Enter your username..." type="text" onChange={(event) => {setLoginUsername(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="loginPassword" className="form-label">Password</label>
                            <input id="loginPassword" className="form-control" placeholder="Enter your password..." type="password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
                        </div>
                        <button className='btn wd-button w-50 m-auto' onClick={loginClickHandler}>Login</button>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="w-50 m-auto my-5 py-5 px-3 wd-form-border">
                    <div className="text-center">
                        <h3>Register <i className="fas fa-glass-martini"></i></h3>
                    </div>
                    <div>
                        <div className="m-3">
                            <label for="firstname" className="form-label">First Name</label>
                            <input id="firstname" className="form-control" placeholder="Enter your first name..." type="text" onChange={(event) => {setFirstname(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="lastname" className="form-label">Last Name</label>
                            <input id="lastname" className="form-control" placeholder="Enter your last name..." type="text" onChange={(event) => {setLastname(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="registerUsername" className="form-label">Username</label>
                            <input id="registerUsername" className="form-control" placeholder="Enter your username..." type="text" onChange={(event) => {setRegisterUsername(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="registerPassword" className="form-label">Password</label>
                            <input id="registerPassword" className="form-control" placeholder="Enter your password..." type="password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="email" className="form-label">Email</label>
                            <input id="email" className="form-control" placeholder="Enter your email..." type="text" onChange={(event) => {setEmail(event.target.value)}}/>
                        </div>
                        <div className="m-3">
                            <label for="accountType" className="form-label">Account Type</label>
                            <select id="accountType" className="form-select" onChange={(event) => {setAccountType(event.target.value)}}>
                                <option value="CONNOISSEUR" selected>CONNOISSEUR</option>
                                <option value="BARTENDER">BARTENDER</option>
                            </select>
                        </div>
                        <button className='btn wd-button w-50 m-auto' onClick={registerClickHandler}>Register</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;