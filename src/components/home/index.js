/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our homepage! Display anonymous stuff if the user is not logged in! Otherwise show their created drinks and musings
 */

import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Thunks
import { findAllCocktailsThunk, findMyCocktailsThunk} from "../../services/thunks/cocktails-thunk.js";

function Home() {
    const { currentUser} = useSelector(state => state.users);
    const { allDatabaseDrinks, myDrinks} = useSelector(state => state.cocktails)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Handle the clicks
    function communityCocktailClickHandler(cocktail){
        navigate(`/details/${cocktail._id}`, {state:cocktail})
    }

    function visitProfileClickHandler(user){
        navigate(`/profile/${user._id}`, {state:user})
    }

    //We are going to make a call to our API to get a random drink!
    useEffect(() => {
        if(currentUser === null){
            //Grab the last created Cocktail
            dispatch(findAllCocktailsThunk());
        }else{
            //Grab the logged in users Cocktails
            dispatch(findMyCocktailsThunk(currentUser._id));
        }
    }, [dispatch, currentUser])

    //The biggest thing is that if someone is logged in we will display something totally different
    return (
        <div>
            <div className="text-center">
                <h1><b>Welcome to Mixologist!</b></h1>
            </div>
            <hr className="wd-line-break" />
            <div className="row">
                {currentUser && 
                <div className="col-12 col-md-6 my-5">
                    <h5><b>Your Created Cocktails:</b></h5>
                    <ul className= "list-group">
                        {myDrinks.map((drink) => {
                            return <li key={drink._id} className="list-group-item"><span className="wd-clickable-link" onClick={() => {communityCocktailClickHandler(drink)}}>{drink.drinkName} (Created On: {drink.creationDate.slice(0,10)})</span></li>
                        })}
                    </ul>
                </div>
                }
                {!currentUser && 
                <div className="col-12 col-md-6 my-5">
                    <h5 className="my-3"><b>Our community has made ({allDatabaseDrinks.length}) unique cocktails to date! Find the newest one below</b></h5>
                    <h5 className="mt-4">Latest Community Cocktail Creation</h5>
                    {allDatabaseDrinks.length !== 0 &&
                        <div className="wd-border p-3">
                            <h6 className="mb-3"><b>Drink Name: </b><span className = "wd-clickable-link" onClick={() => {communityCocktailClickHandler(allDatabaseDrinks[allDatabaseDrinks.length-1])}}>{allDatabaseDrinks[allDatabaseDrinks.length-1].drinkName}</span></h6>
                            <h6 className="mb-3"><b>Main Alcohol: </b>{allDatabaseDrinks[allDatabaseDrinks.length-1].mainAlcohol}</h6>
                            {allDatabaseDrinks[allDatabaseDrinks.length-1].createdBy && 
                            <h6 className="mb-3"><b>Creator: </b><span className = "wd-clickable-link" onClick={() => {visitProfileClickHandler(allDatabaseDrinks[allDatabaseDrinks.length-1].createdBy)}}>{allDatabaseDrinks[allDatabaseDrinks.length-1].createdBy.username} ({allDatabaseDrinks[allDatabaseDrinks.length - 1].createdBy.yearsOfExperience} Years of Experience)</span></h6>
                            }
                            {!(allDatabaseDrinks[allDatabaseDrinks.length-1].createdBy) && <h6 className="text-danger"><b>Creator: </b>User Was Deleted!</h6>}
                            <h6><b>Creation Date: </b>{allDatabaseDrinks[allDatabaseDrinks.length-1].creationDate.slice(0,10)}</h6>
                        </div>
                    }
                </div>
                }
                <div className="col-12 col-md-6 my-5">
                    <h5><b>Site Highlights</b></h5>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <b>Search: </b>If you head over to the search page, you will be able to search for a number of industry-standard
                            cocktails by simply typing in any ingredient! If nothing pops up, then that means we couldn't find a drink with
                            that ingredient.
                        </li>
                        <li className="list-group-item">
                            <b>Cocktails: </b>Every cocktail we know and love started out in someone's kitchen! Feel free to share your latest and
                            greatest cocktail creation!
                        </li>
                        <li className="list-group-item">
                            <b>Drink History Tours: </b>Do you like the history of drinks as much as the drinks themselves? Well now is your chance to put your knowledge to good use! Feel free to
                            share a brief history of your favorite drink!
                        </li>
                        <li className="list-group-item">
                            <b>Drink Pairings: </b>What's a party without a plethora of cocktails. Do you have a strong opinion about which drinks pair well
                            together? Let the people know!
                        </li> 
                    </ul>
                </div>
                <div className="col-12 mt-3 text-center ">
                    <hr className="wd-line-break" />
                    <i className="fas fa-glass-cheers fa-5x"></i>
                </div>
            </div>
        </div>
    )
}

export default Home;