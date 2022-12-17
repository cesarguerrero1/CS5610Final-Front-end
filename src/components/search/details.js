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

//Components
import Endorsements from "./endorsements.js"
import Reviews from "./reviews.js"

function CocktailDetails() {
    const { cid } = useParams();
    const { detailedApiDrink, allDatabaseDrinks } = useSelector((state) => state.cocktails)
    const { state } = useLocation(); //If this is null than we are using the 3rd part API and vice versa
    const [currentState, setCurrentState] = useState(state);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function userClickHandler(user) {
        navigate(`/profile/${user._id}`, {state:user});
    }


    useEffect(() => {
        if(cid.length > 10){
            //We are dealing with a database call
            if(allDatabaseDrinks.length <= 0){
                //We ned to update!
                dispatch(findAllCocktailsThunk())
                return
            }
            //if will reroute here on the second pass and say "Im no longer empty now what"
            if(currentState === null){
                const cocktail = allDatabaseDrinks.find((cocktail) => {
                    return cocktail._id === cid
                })
                setCurrentState(cocktail)
                return;
            }
        }else{
            //Now handle the other side of this 
            //Is detailedApiDrink empty?
            if(detailedApiDrink === null){
                dispatch(searchDrinkByIdThunk(cid));
                return;
            }

            //if it is not full well does it match our id?
            if(detailedApiDrink.idDrink !== cid){
                dispatch(searchDrinkByIdThunk(cid));
                return;
            }
        }
    }, [dispatch, allDatabaseDrinks, cid, currentState, detailedApiDrink]);

    return (
        <div>
            {currentState &&
                <div>
                    <div className='row d-flex justify-content-start'>
                        <div className="col-12 col-md-4">
                            <img alt="drink" className="img-thumbnail wd-detail-image" src="/images/cocktailSilhouette.jpeg" />
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
                    <div className="wd-details-background p-3 mt-5">     
                        <Endorsements did={currentState._id}/>
                        <Reviews did={currentState._id}/>
                    </div>
                </div>
            }
            {currentState === null && detailedApiDrink &&
                <div>
                    <div className='row d-flex justify-content-start'>
                        <div className="col-12 col-md-4">
                            <img alt="drink" className="img-thumbnail wd-detail-image" src={`${detailedApiDrink.strDrinkThumb}`} />
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
                    <div className="wd-details-background  p-3 mt-5">
                        <Endorsements did={detailedApiDrink.idDrink}/>
                        <Reviews did={detailedApiDrink.idDrink}/>
                    </div>
                </div>
            }
        </div>

    )
}

export default CocktailDetails;