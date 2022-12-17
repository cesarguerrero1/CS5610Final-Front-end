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
import { findAllCocktailsThunk } from "../../services/thunks/cocktails-thunk.js";

function CocktailsList(){

    const {currentUser} = useSelector(state => state.users);
    const {allDatabaseDrinks} = useSelector(state => state.cocktails);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function cocktailClickHandler(drink){
        navigate(`/cocktails/${drink._id}`, {state:drink});
    }

    useEffect(() => {
        dispatch(findAllCocktailsThunk());
    }, [dispatch]);

    return (
        <div>
            {currentUser && <CreateCocktail/>}
            <div>
                <ul className="list-group">
                {allDatabaseDrinks.map((drink) => {
                    return(<li key={drink._id} className="list-group-item wd-list-item" onClick={() => {cocktailClickHandler(drink)}}>{drink.drinkName}</li>)
                }
                )}
                </ul>
            </div>
        </div>
    )
}

export default CocktailsList;