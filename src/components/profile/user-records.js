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
import { deleteReviewThunk, findAllMyReviewsThunk } from "../../services/thunks/reviews-thunk.js";

//Notice that we use user here as we want to reuse this component for the public profile as well!
function UserRecords({ user }) {

    const { currentUser } = useSelector(state => state.users);
    const { myDrinks } = useSelector(state => state.cocktails);
    const { myReviews } = useSelector(state => state.reviews);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function communityCocktailClickHandler(cocktailId) {
        navigate(`/details/${cocktailId}`, { state: null })
    }

    function deleteReviewClickHandler(rid){
        dispatch(deleteReviewThunk(rid));
    }

    useEffect(() => {
        dispatch(findMyCocktailsThunk(user._id));
        dispatch(findAllMyReviewsThunk(user._id));
    }, [dispatch, user._id]);

    return (
        <div>
            <div className="=col-12">
                <h4>My Cocktails</h4>
                <ul className="list-group">
                    {myDrinks.map((drink) => {
                        return <li key={drink._id} className="list-group-item"><span className="wd-clickable-link" onClick={() => { communityCocktailClickHandler(drink._id) }}>{drink.drinkName} (Created On: {drink.creationDate.slice(0, 10)})</span></li>
                    })}
                </ul>
            </div>
            <div className="=col-12 my-5">
                <h4>My Histories</h4>
            </div>
            <div className="=col-12 my-5">
                <h4>My Pairings</h4>
            </div>
            {currentUser &&
                <div className="=col-12 my-5">
                    <h4>My Reviews</h4>
                    <ul className="list-group">
                    {myReviews.map((review) => {
                        return(
                            <li key={review._id} className="list-group-item d-flex align-middle">
                                <span className="wd-clickable-link" onClick={() => {communityCocktailClickHandler(review.cocktail)}}>{review.comment} (Posted On: {review.postedDate.slice(0,10)})</span>
                                {
                                    currentUser && review.author && currentUser._id === review.author._id && 
                                    <button className="btn wd-delete-button ms-5" onClick={() => {deleteReviewClickHandler(review._id)}}>Delete Review</button>  
                                }   
                            </li>
                        )
                    })}
                </ul>
                </div>
            }
            {currentUser && user.accountType === "BARTENDER" &&
                <div className="=col-12 my-5">
                    <h4>My Endorsements</h4>
                </div>
            }
        </div>
    )
}

export default UserRecords;