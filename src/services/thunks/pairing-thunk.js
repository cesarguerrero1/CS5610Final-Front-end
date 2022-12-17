/**
 * Cesar Guerrero
 * CS5610 - Fall 2022
 * 12/17/22
 * 
 * @file Async calls to the server and then used to update redux
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as pairingService from "../pairing-service.js"

export const createPairThunk = createAsyncThunk('pairing/createPairing', (pairing) => {
    return pairingService.createPairing(pairing);
})

export const findAllPairingsThunk = createAsyncThunk('pairing/findAllPairings', () => {
    return pairingService.findAllPairings();
})

export const deletePairThunk = createAsyncThunk('pairing/deletePairing', (pid) => {
    pairingService.deletePair(pid);
    return pid;
})