/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search page!
 */

import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Thunks
import { searchDrinksByIngredientThunk, searchDrinkByIdThunk} from "../../services/thunks/cocktails-thunk";

function Search(){

    const [ingredient, setIngredient] = useState('');
    const {searchedDrinks} = useSelector((state) => (state.cocktails));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function searchClickHandler(){
        dispatch(searchDrinksByIngredientThunk(ingredient));
    };

    function cocktailClickHandlder(drink){
        dispatch(searchDrinkByIdThunk(drink.idDrink));
        setTimeout(() => {navigate(`/cocktails/${drink.idDrink}`, {state:null})}, 1500);
        
    }


    return(
        <div>
            <div className="w-50 m-auto text-center">
                <h4>Type in the ingredient that you want in your cocktail!</h4>
                <input className="form-control" value={ingredient} placeholder="Example: mint" onChange={(event) => {setIngredient(event.target.value)}}></input>
                <button className="btn wd-search-button" onClick={searchClickHandler}>Search</button>
            </div>
            {searchedDrinks && 
            <div className="wd-border p-5">
                <ul className="list-group">
                {searchedDrinks.map((drink) => {
                    return(<li key={drink.idDrink} className="list-group-item wd-list-item" onClick={() => {cocktailClickHandlder(drink)}}>{drink.strDrink}</li>)
                })
                }
                </ul>
            </div>
            }

        </div>
    )
}
export default Search;