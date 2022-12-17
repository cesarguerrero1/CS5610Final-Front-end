/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Cocktails Page
 */

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router";

//Component
import CreateCocktail from "./create-cocktail.js";

//Thunks
import { findAllCocktailsThunk} from "../../services/thunks/cocktails-thunk.js";

function CocktailsList(){

    const {allDatabaseDrinks} = useSelector(state => state.cocktails);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function cocktailClickHandler(drink){
        navigate(`/details/${drink._id}`, {state:drink});
    }

    useEffect(() => {
        dispatch(findAllCocktailsThunk());
    }, [dispatch]);

    return (
        <div>
            <CreateCocktail/>
            <div className="my-5">
                <h2>Community Cocktails</h2>
                <ul className="list-group">
                {allDatabaseDrinks.map((drink) => {
                    return(
                        <li key={drink._id} className="list-group-item">
                            <span className="wd-clickable-link" onClick={() => {cocktailClickHandler(drink)}}>{drink.drinkName} (Created On: {drink.creationDate.slice(0,10)})</span>
                        </li>
                    )
                }
                )}
                </ul>
            </div>
        </div>
    )
}
export default CocktailsList;