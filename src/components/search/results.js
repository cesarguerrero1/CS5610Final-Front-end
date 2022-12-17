/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search Results component
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router";

//Thunks
import { searchDrinkByIdThunk } from "../../services/thunks/cocktails-thunk";

function Results() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { apiDrinks } = useSelector((state) => (state.cocktails));

    function cocktailClickHandler(drink) {
        dispatch(searchDrinkByIdThunk(drink.idDrink));
        //We want to give the reducer a moment to update
        setTimeout(() => { navigate(`/details/${drink.idDrink}`, { state: null }) }, 500);
    }

    return (
        <div>
            {!apiDrinks && <h6 className="text-center my-3 fw-bold text-danger">There is no drink in the database with your ingredient. Try using a different term!</h6>}
            {apiDrinks && apiDrinks.length !== 0 &&
                <div className="my-5">
                    <ul className="list-group">
                        {apiDrinks.map((drink) => {
                            return (
                                <li key={drink.idDrink} className="list-group-item">
                                    <div className='d-flex justify-content-start'>
                                        <img alt="drink" className="img-thumbnail wd-search-image" src={`${drink.strDrinkThumb}`} />
                                        <div className="p-3">
                                            <h4 className="mb-3"><b>Drink Name: </b>{drink.strDrink}</h4>
                                            <span className="wd-clickable-link fw-bold" onClick={() => { cocktailClickHandler(drink) }}>Learn More</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>

    )

}

export default Results;