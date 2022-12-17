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
import { deleteEndorsementThunk, findAllMyEndorsementsThunk} from "../../services/thunks/endorsements-thunk.js";

//Notice that we use user here as we want to reuse this component for the public profile as well!
function UserRecords({ user }) {

    const { currentUser } = useSelector(state => state.users);
    const { myDrinks } = useSelector(state => state.cocktails);
    const { myReviews } = useSelector(state => state.reviews);
    const { myEndorsements} = useSelector(state => state.endorsements);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function communityCocktailClickHandler(cocktailId) {
        navigate(`/details/${cocktailId}`, { state: null })
    }

    function deleteReviewClickHandler(rid){
        dispatch(deleteReviewThunk(rid));
    }

    function deleteEndorsementClickHandler(eid){
        dispatch(deleteEndorsementThunk(eid));
    }

    useEffect(() => {
        dispatch(findMyCocktailsThunk(user._id));
        dispatch(findAllMyReviewsThunk(user._id));
        dispatch(findAllMyEndorsementsThunk(user._id));
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
                    <ul className="list-group">
                        {myEndorsements.map((endorsement) => {
                            return(
                                <li key={endorsement._id} className="list-group-item d-flex align-middle">
                                    <span className="wd-clickable-link" onClick={() => {communityCocktailClickHandler(endorsement.cocktail)}}>Cocktail Endorsed On: {endorsement.endorsementDate.slice(0,10)}</span>
                                    {
                                        currentUser && endorsement.endorser && currentUser._id === endorsement.endorser._id && 
                                        <button className="btn wd-delete-button ms-5" onClick={() => {deleteEndorsementClickHandler(endorsement._id)}}>Delete Endorsement</button>  
                                    }   
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}

export default UserRecords;