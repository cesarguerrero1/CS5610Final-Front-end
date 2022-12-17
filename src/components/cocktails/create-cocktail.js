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
        if(currentUser === null){
            alert('You must be a member, in order to make a cocktail');
            return
        }
        if(drinkName === "" || recommendedServingGlass === "" || instructions === ""){
            alert("You have to fill out the entire form in order to submit it");
            return;
        }else{
            dispatch(createCocktailThunk({
                createdBy: currentUser._id,
                mainAlcohol,
                drinkName,
                recommendedServingGlass,
                instructions
            }))

            setDrinkName('');
            setDrinkName('');
            setRecommendedServingGlass('');
            setInstructions('');
        }

    }

    return (
        <div className="w-50 m-auto my-5 py-5 px-3 wd-form-border">
            <h3 className="text-center">Create a Cocktail!</h3>
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
                    <input id="drinkName" className="form-control" placeholder="Enter the name of your drink..." type="text" value={drinkName} onChange={(event) => { setDrinkName(event.target.value) }} />
                </div>
                <div className="m-3">
                    <label for="recommendedServingGlass" className="form-label">Serving Glass</label>
                    <input id="recommendedServingGlass" className="form-control" placeholder="What is the recommended serving glass..." type="text" value={recommendedServingGlass} onChange={(event) => { setRecommendedServingGlass(event.target.value) }} />
                </div>
                <div className="m-3">
                    <label for="instructions" className="form-label">Instructions (Include ingredients and measurements)</label>
                    <textarea id="instructions" className="form-control" placeholder="How does one make this?" value={instructions} onChange={(event) => { setInstructions(event.target.value) }}></textarea>
                </div>
                <button className='btn wd-button w-50 m-auto' onClick={createClickHandler}>Create</button>
            </div>
        </div>
    )
}

export default CreateCocktail;