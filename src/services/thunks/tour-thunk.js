/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tourService from "../tour-service.js"

export const createTourThunk = createAsyncThunk('history/createTour', (history) => {
    return tourService.createTour(history);
})

export const findAllToursThunk = createAsyncThunk('history/findAllTours', () => {
    return tourService.findAllTours();
})

export const deleteTourThunk = createAsyncThunk('history/deleteTour', (tid) => {
    tourService.deleteTour(tid);
    return tid;
})