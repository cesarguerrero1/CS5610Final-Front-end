/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search Details
 */

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

function CocktailDetails(){
    const {detailedSearchDrink} = useSelector((state) => state.cocktails)
    const {state} = useLocation(); //If this is null than we are using the 3rd part API and vice versa




    return(
        <div>
            {state &&
            <div>
                <h6>Creator: {state.createdBy.username}</h6>
                <h6>Main Alcohol:{state.mainAlcohol}</h6>
                <h6>Drink Name: {state.drinkName}</h6>
                <h6>Recommended Glass: {state.recommendedServingGlass}</h6>
                <p>Ingredients: </p>
                <p>Corresponding Measurements:</p>
                <p>Instructions:{state.instructions}</p>
                <h6>Posted On: {state.creationDate.slice(0,10)}</h6>
            </div>
            }
            {detailedSearchDrink && 
            <div>
                <h6>Drink Name: {detailedSearchDrink.strDrink}</h6>
                <h6>Recommended Glass:</h6>
                <p>Ingredients: </p>
                <p>Corresponding Measurements:</p>
                <p>Instructions: {detailedSearchDrink.strInstructions}</p>
            </div>
            }
            <div>
                <div>Endorsed By: </div>
                <div>Reviews</div>
            </div>
        </div>
        
    )
}

export default CocktailDetails;
