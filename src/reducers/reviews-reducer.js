/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Reducer for reviews
 */

import {createSlice} from "@reduxjs/toolkit";

//Thunks
import { findAllMyReviewsThunk,  findAllReviewsThunk, createReviewThunk, deleteReviewThunk} from "../services/thunks/reviews-thunk.js";

const initialState = {
    allReviews: [],
    myReviews: []
}

const reviewSlice = createSlice({
    name:'reviews',
    initialState:initialState,

    extraReducers:{
        //Get all my Reviews
        [findAllMyReviewsThunk.fulfilled]: (state, action) => {
            state.myReviews = action.payload;
            return
        },
        [findAllMyReviewsThunk.rejected]: (state, action) => {
            state.myReviews = [];
            return
        },

        [findAllReviewsThunk.fulfilled]: (state, action) => {
            state.allReviews = action.payload;
            return
        },
        [findAllReviewsThunk.rejected]: (state, action) => {
            state.allReviews = []
            return
        },

        [createReviewThunk.fulfilled]: (state, action) => {
            state.allReviews.push(action.payload);
            state.myReviews.push(action.payload);
            alert('Review successfully created!');
            return
        },
        [createReviewThunk.rejected]: (state, action) => {
            alert("Review creation Failure");
            return
        },

        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.allReviews = state.allReviews.filter((review) => {
                return review._id !== action.payload;
            })
            state.myReviews = state.myReviews.filter((review) => {
                return review._id !== action.payload;
            })
            alert('Successful Deletion');
            return
        },
        [deleteReviewThunk.rejected]: (state, action) => {
            alert("Failed to delete Review!");
            return
        },

    }
})

export default reviewSlice.reducer;