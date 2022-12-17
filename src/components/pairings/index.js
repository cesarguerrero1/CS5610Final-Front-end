/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Pairings Page
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { deletePairThunk, findAllPairingsThunk } from "../../services/thunks/pairing-thunk.js"

import CreatePairing from "./pairing-form.js"

function Pairing() {

    const { currentUser } = useSelector(state => state.users);
    const { allPairs } = useSelector(state => state.pairings);
    const dispatch = useDispatch();


    function deletePairingClickHandler(pairID) {
        dispatch(deletePairThunk(pairID));
    }

    useEffect(() => {
        dispatch(findAllPairingsThunk());
    }, [dispatch])

    return (
        <div className="row">
            <CreatePairing />
            <div className="col-12 col-md-6 col-lg-8 px-3">
                <h3>Community Created Pairings</h3>
                <ul className="list-group">
                    {allPairs.map((pair) => {
                        return (
                            <li key={pair._id} className="list-group-item">
                                <div>
                                    <h4>{pair.createdBy.username} - (Posted On: {pair.creationDate.slice(0, 10)})</h4>
                                    <h6><b>Drink Name #1:</b>{pair.firstDrinkName} (Alcohol: {pair.firstMainAlcohol})</h6>
                                    <h6><b>Drink Name #2:</b>{pair.secondDrinkName} (Alcohol: {pair.secondMainAlcohol})</h6>
                                    <h6><b>Drink Name #3:</b>{pair.thirdDrinkName} (Alcohol: {pair.thirdMainAlcohol})</h6>
                                    <h6><b>Title:</b>{pair.pairingTitle}</h6>
                                    <h6><b>Why this is a good pairing:</b></h6>
                                    <p>{pair.pairingDescription}</p>
                                </div>
                                {currentUser && currentUser._id === pair.createdBy._id && <button className="btn wd-delete-button" onClick={() => { deletePairingClickHandler(pair._id) }}>Delete</button>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Pairing;