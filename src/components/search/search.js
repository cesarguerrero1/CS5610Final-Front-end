/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search page!
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Routes, Route, useNavigate} from "react-router-dom";

//Components
import Results from "./results.js";

//Thunks
import { searchDrinksByIngredientThunk} from "../../services/thunks/cocktails-thunk";

function Search() {

    //Search Term and then get the results from our reducer
    const [ingredient, setIngredient] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function searchClickHandler() {
        dispatch(searchDrinksByIngredientThunk(ingredient));
        setTimeout(() =>{navigate(`./results?ingredient=${ingredient}`)}, 500)
    };

    return (
        <div>
            <div className="w-75 m-auto text-center">
                <h4>Using the search bar below type in a single ingredient that you would like to use in a cocktail</h4>
                <div className="d-flex justify-content-center">
                    <input className="form-control" value={ingredient} placeholder="mint" onChange={(event) => { setIngredient(event.target.value) }}></input>
                    <button className="btn wd-button ms-5 w-25" onClick={searchClickHandler}>Search</button>
                </div>
            </div>
            <Routes>
                <Route path={`/results/*`} element={<Results/>}/>
            </Routes>
        </div>
    )
}
export default Search;