/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */

import { createAsyncThunk } from "@reduxjs/toolkit";

import * as reviewService from "../review-service.js"

export const createReviewThunk = createAsyncThunk('reviews/createReview', (review) => {
    return reviewService.createReview(review);
});

export const findAllMyReviewsThunk = createAsyncThunk('reviews/findAllMyReviews', (uid) => {
    return reviewService.findAllMyReviews(uid);
})

export const findAllReviewsThunk  = createAsyncThunk('reviews/findAllReviews', () => {
    return reviewService.findAllReviews();
});

export const deleteReviewThunk = createAsyncThunk('reviews/deleteReview', (rid) => {
    reviewService.deleteReview(rid);
    return rid;
});