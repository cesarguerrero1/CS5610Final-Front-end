/**
 * Cesar Guerrero
 * 12/16/22
 * CS5610 - Final Project
 * 
 * @file Reviews
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//THUNKS
import { findAllReviewsThunk, createReviewThunk} from "../../services/thunks/reviews-thunk.js";

//THUNK

//What this function is doing is calling a 
function Reviews({did}) {
    const {currentUser} = useSelector(state => state.users);
    const {allReviews} = useSelector(state => state.reviews);
    const [reviewText, setReviewText] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function reviewClickHandler(){
        if(reviewText === ""){
            alert("You cannot post an empty review! Please type something");
            return
        }

        dispatch(createReviewThunk({author:currentUser._id, cocktail:did, comment:reviewText}));
        return
    }

    function userClickHandler(user){
        navigate(`/profile/${user._id}`, {state:user});
    }

    useEffect(() => {
        dispatch(findAllReviewsThunk());
    }, [dispatch])

    return (
        <div className="my-5 row">
            <div className="my-5">
                <h2 className="text-center">Drink Reviews</h2>
                <hr className="w-25 m-auto"/>
            </div>
            <div className="col-12 col-md-4">
                <label for="reviewText" className="form-label fw-bold">Share your thoughts below</label>
                <textarea id="reviewText" className="form-control" value={reviewText} onChange={(event) => setReviewText(event.target.value)}></textarea>
                {currentUser && 
                <button className="btn wd-button w-50 mx-auto my-3" onClick={reviewClickHandler}>Post</button>
                }
            </div>
            <div className="col-12 col-md-8">
                <ul className="list-group">
                    {allReviews.map((review) => {
                        return( review.cocktail === did ? 
                                <li key={review._id} className="list-group-item">
                                    <h5>{review.author !== null ? <span className="wd-clickable-link" onClick={() => {userClickHandler(review.author)}}>{review.author.username}</span> : <span>"User Was Deleted!"</span>} - <b>Posted on: </b>{review.postedDate.slice(0,10)}</h5>
                                    <p>{review.comment}</p>
                                </li> 
                                : null
                                
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Reviews;