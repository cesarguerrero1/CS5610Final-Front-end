/**
 * Cesar Guerrero
 * 12/16/22
 * CS5610 - Final Project
 * 
 * @file Endorsements
 */

import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//THUNKS
import {findAllEndorsementsThunk, createEndorsementThunk} from "../../services/thunks/endorsements-thunk.js"

function Endorsements({did}){

    const {currentUser} = useSelector(state => state.users);
    const {allEndorsements} = useSelector(state => state.endorsements);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    //
    function endorseClickHandler() {
        const alreadyEndorsed = allEndorsements.find((endorsement) => {
            return endorsement.endorser._id === currentUser._id && endorsement.cocktail === did
        })

        if(alreadyEndorsed){
            alert("You have already enorsed this!");
            return
        }else{
            dispatch(createEndorsementThunk({cocktail:did, endorser:currentUser._id}));
            setTimeout(() => {window.location.reload()}, 500);
            return
        }
    }   

    function userClickHandler(user){
        navigate(`/profile/${user._id}`, {state:user});
    }

    useEffect(() => {
       dispatch(findAllEndorsementsThunk());
    }, [dispatch])
    
    return(
        <div className="my-5">
            <div className="my-5">
                <h2 className="text-center">Endorsements By Bartenders</h2>
                {currentUser && currentUser.accountType === "BARTENDER" && 
                    <button className="btn wd-button w-25 mx-auto my-3" onClick={endorseClickHandler}>Endorse</button>
                }
                <hr className="w-25 m-auto"></hr>
                <ul>
                    {allEndorsements.map((endorsement) => {
                        return(endorsement.cocktail === did ?
                            <li key={endorsement._id} className="list-group-item">
                                <h5>{endorsement.endorser !== null ? <span className="wd-clickable-link" onClick={() => {userClickHandler(endorsement.endorser)}}>{endorsement.endorser.username}</span> : <span>"User Was Deleted!"</span>} - <b>Endorsed on: </b>{endorsement.endorsementDate.slice(0,10)}</h5>
                            </li> 
                        : null
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Endorsements;