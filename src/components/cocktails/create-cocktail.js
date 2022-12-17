/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Cocktails Page
 */

import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { createCocktailThunk } from "../../services/thunks/cocktails-thunk.js";

function CreateCocktail() {

    const {currentUser} = useSelector(state => state.users);
    const [mainAlcohol, setMainAlcohol] = useState('TEQUILA');
    const [drinkName, setDrinkName] = useState('');
    const [recommendedServingGlass, setRecommendedServingGlass] = useState('');
    const [instructions, setInstructions] = useState('');

    const dispatch = useDispatch();

    function createClickHandler(){
        dispatch(createCocktailThunk({
            createdBy: currentUser._id,
            mainAlcohol,
            drinkName,
            recommendedServingGlass,
            instructions
        }))
    }

    return (
        <div className="w-50 m-auto mt-5 py-5 px-3 wd-form-border">
            <div>
                <div className="m-3">
                    <label for="mainAlcohol" className="form-label">Main Alcohol</label>
                    <select id="mainAlcohol" className="form-select" onChange={(event) => { setMainAlcohol(event.target.value) }}>
                        <option value="TEQUILA" selected>TEQUILA</option>
                        <option value="VODKA">VODKA</option>
                        <option value="WHISKEY">WHISKEY</option>
                        <option value="RUM">RUM</option>
                        <option value="GIN">GIN</option>
                    </select>
                </div>
                <div className="m-3">
                    <label for="drinkName" className="form-label">Drink Name</label>
                    <input id="drinkName" className="form-control" placeholder="Enter the name of your drink..." type="text" onChange={(event) => { setDrinkName(event.target.value) }} />
                </div>
                <div className="m-3">
                    <label for="recommendedServingGlass" className="form-label">Serving Glass</label>
                    <input id="recommendedServingGlass" className="form-control" placeholder="What is the recommended serving glass..." type="text" onChange={(event) => { setRecommendedServingGlass(event.target.value) }} />
                </div>
                <div className="m-3">
                    <label for="instructions" className="form-label">Instructions</label>
                    <input id="instructions" className="form-control" placeholder="How does one make this?" type="text" onChange={(event) => { setInstructions(event.target.value) }} />
                </div>
                <button className='btn wd-create-button' onClick={createClickHandler}>Create</button>
            </div>
        </div>
    )
}

export default CreateCocktail;