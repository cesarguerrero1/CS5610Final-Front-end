/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Search Details
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { findAllCocktailsThunk, searchDrinkByIdThunk } from "../../services/thunks/cocktails-thunk";

function CocktailDetails() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state) => state.users);
    const { detailedApiDrink, allDatabaseDrinks } = useSelector((state) => state.cocktails)

    const { state } = useLocation(); //If this is null than we are using the 3rd part API and vice versa
    const [currentState, setCurrentState] = useState(state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function endorseClickHandler(cid) {
        //We need to call an endorsement THUNK so that we can endorse this drink by a bartender!
    }

    function userClickHandler(user) {
        navigate(`/profile/${user._id}`, {state:user});
    }

    //We need to get all of our users first THEN we can find the user of interest!
    useEffect(() => {
        if (currentState === null){
            //Now we need to check what size the string is
            if(cid.length < 10){
                //Someone is looking for an api drink
                if(detailedApiDrink === null){
                    dispatch(searchDrinkByIdThunk(cid))
                    return
                }else if(detailedApiDrink.strDrink !== cid){
                    dispatch(searchDrinkByIdThunk(cid))
                    return
                }else{
                    return
                }
            }else{
                //Somone is looking for one of our drinks
                if(allDatabaseDrinks.length > 0){
                    const cocktail = allDatabaseDrinks.find((cocktail) => {
                        return cocktail._id === cid
                    })
                    setCurrentState(cocktail)
                    setTimeout(() => {return}, 1000);
                }else{
                    dispatch(findAllCocktailsThunk())
                }
            }
        } 
    }, [dispatch, currentUser, allDatabaseDrinks, cid, currentState, detailedApiDrink])

    return (
        <div>
            {currentState &&
                <div className='row d-flex justify-content-start'>
                    <div className="col-12 col-md-4">
                        <img alt="drink" className="img-thumbnail wd-detail-image" src="/images/cocktailSilhouette.jpeg" />
                        <button className="btn wd-button w-50 mx-auto my-3" onClick={endorseClickHandler}>Endorse</button>
                    </div>
                    <div className="col-12 col-md-8 px-3 mt-3">
                        <h6 className="mb-2"><b>Drink Name: </b>{currentState.drinkName}</h6>
                        <h6 className="mb-2"><b>Main Alcohol: </b>{currentState.mainAlcohol}</h6>
                        <h6 className="mb-2"><b>Recommended Glass: </b>{currentState.recommendedServingGlass}</h6>
                        <h6 className="mb-2"><b>Instructions:</b></h6>
                        <p className="px-1">{currentState.instructions}</p>
                        <h6 className="mb-2"><b>Creator: </b>
                        {
                        currentState.createdBy !== null ?  <span className="wd-clickable-link" onClick={() => {userClickHandler(currentState.createdBy)}}>{currentState.createdBy.username}</span> : <span>"User Was Deleted!"</span>
                        }
                        </h6>
                        <h6 className="mb-2"><b>Posted On: </b>{currentState.creationDate.slice(0, 10)}</h6>
                    </div>
                </div>
            }
            {currentState === null && detailedApiDrink &&
                <div className='row d-flex justify-content-start'>
                    <div className="col-12 col-md-4">
                        <img alt="drink" className="img-thumbnail wd-detail-image" src={`${detailedApiDrink.strDrinkThumb}`} />
                        <button className="btn wd-button w-50 mx-auto my-3" onClick={endorseClickHandler}>Endorse</button>
                    </div>
                    <div className="col-12 col-md-8 px-3 mt-3">
                        <h6 className="mb-2"><b>Drink Name: </b>{detailedApiDrink.strDrink}</h6>
                        <h6 className="mb-2"><b>Recommended Glass: </b>{detailedApiDrink.strGlass}</h6>
                        <h6 className="mb-2"><b>Ingredients:</b></h6>
                        <ul className="list-group my-3">
                            {detailedApiDrink.strIngredient1 &&
                                <li className="list-group-item">{detailedApiDrink.strIngredient1} ({detailedApiDrink.strMeasure1})</li>
                            }
                            {detailedApiDrink.strIngredient2 &&
                                <li className="list-group-item">{detailedApiDrink.strIngredient2} ({detailedApiDrink.strMeasure2})</li>
                            }
                            {detailedApiDrink.strIngredient3 &&
                                <li className="list-group-item">{detailedApiDrink.strIngredient3} ({detailedApiDrink.strMeasure3})</li>
                            }
                            {detailedApiDrink.strIngredient4 &&
                                <li className="list-group-item">{detailedApiDrink.strIngredient4} ({detailedApiDrink.strMeasure4})</li>
                            }
                            {detailedApiDrink.strIngredient5 &&
                                <li className="list-group-item">{detailedApiDrink.strIngredient5} ({detailedApiDrink.strMeasure5})</li>
                            }
                        </ul>
                        <h6 className="mb-2"><b>Instructions:</b></h6>
                        <p className="px-1">{detailedApiDrink.strInstructions}</p>
                    </div>
                </div>
            }
        </div>

    )
}

export default CocktailDetails;