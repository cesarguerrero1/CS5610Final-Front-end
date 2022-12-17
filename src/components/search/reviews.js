/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search Details
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

function Reviews({did}) {

    function reviewClickHandler(did){
        //We need to call the review THUNK so that we can review this drink
        if(currentUser === null){
            alert("You are only allowed to leave reviews if you are logged in!");
        }else{
            alert(did)
        }
    }

    return (
        <div className="col-12 row">
            <div className="my-5">
                <h2 className="text-center">Drink Reviews</h2>
                <hr className="w-25 m-auto"></hr>
            </div>
            <div className="col-12 col-md-4">
                <label className="form-label">Share your thoughts below</label>
                <textarea className="form-control"></textarea>
                {
                    !state && detailedApiDrink && <button className="btn wd-button w-50 mx-auto my-3" onClick={() => reviewClickHandler(drink.idDrink)}>Review</button>
                }
                {state && <button className="btn wd-button w-50 mx-auto my-3" onClick={() => reviewClickHandler(state._id)}>Review</button>}
            </div>
            <div className="col-12 col-md-8">
                <ul className="list-group">
                </ul>
            </div>
        </div>
    )
}

export default Reviews;