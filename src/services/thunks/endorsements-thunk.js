/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */

import { createAsyncThunk } from "@reduxjs/toolkit";

import * as endorsementService from "../endorsement-service.js"

export const createEndorsementThunk = createAsyncThunk('endorsements/createEndorsement', (endorsement) => {
    return endorsementService.createEndorsement(endorsement);
});

export const findAllMyEndorsementsThunk = createAsyncThunk('endorsements/findAllMyEndorsements', (uid) => {
    return endorsementService.findAllMyEndorsements(uid);
})

export const findAllEndorsementsThunk  = createAsyncThunk('endorsements/findAllEndorsements', () => {
    return endorsementService.findAllEndorsements();
});

export const deleteEndorsementThunk = createAsyncThunk('endorsements/deleteEndorsement', (eid) => {
    endorsementService.deleteEndorsement(eid);
    return eid;
});