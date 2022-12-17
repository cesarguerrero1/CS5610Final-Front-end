/**
 * Cesar Guerrero
 * 12/16/22
 * CS5610 - Final Project
 * 
 * @file This is the part of the profile that houses the users stuff
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

//Thunks
import { findMyCocktailsThunk } from "../../services/thunks/cocktails-thunk.js";

//Notice that we use user here as we want to reuse this component for the public profile as well!
function UserRecords({ user }) {

    const { currentUser } = useSelector(state => state.users);
    const { myDrinks } = useSelector(state => state.cocktails);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function communityCocktailClickHandler(cocktail) {
        navigate(`/cocktails/${cocktail._id}`, { state: cocktail })
    }

    useEffect(() => {
        dispatch(findMyCocktailsThunk(user._id));
    }, [dispatch, user._id]);

    return (
        <div>
            <div className="=col-12 my-5">
                <h5>My Cocktails</h5>
                <ul className="list-group">
                    <ul className="list-group">
                        {myDrinks.map((drink) => {
                            return <li key={drink._id} className="list-group-item"><span className="wd-clickable-link" onClick={() => { communityCocktailClickHandler(drink) }}>{drink.drinkName} (Created On: {drink.creationDate.slice(0, 10)})</span></li>
                        })}
                    </ul>
                </ul>

            </div>
            <div className="=col-12 my-5">
                <h5>My Histories</h5>
            </div>
            <div className="=col-12 my-5">
                <h5>My Pairings</h5>
            </div>
            {currentUser &&
                <div className="=col-12 my-5">
                    <h5>My Reviews</h5>
                </div>
            }
            {user.accountType === "BARTENDER" &&
                <div className="=col-12 my-5">
                    <h5>My Endorsements</h5>
                </div>
            }
        </div>
    )
}

export default UserRecords;