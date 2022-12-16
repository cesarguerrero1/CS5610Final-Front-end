/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our homepage! Display anonymous stuff if the user is not logged in! Otherwise show their created drinks and musings
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Call our api service
import * as apiService from "../../services/api-service.js"

function Home() {
    const { currentUser } = useSelector(state => state.users);
    //const [randomDrink, setRandomDrink] = useState(null);
    //const dispatch = useDispatch();

    //We are going to make a call to our API to get a random drink!
    useEffect(() => {
    })

    //The bigges thing is that if someone is logged in we will display something totally different
    return (
        <div>
            <div className="text-center">
                <h3>Welcome to Mixologist!</h3>
            </div>
            <hr className="wd-line-break" />
            {currentUser &&
                <div className="row">
                    <div className="col-12">
                    </div>
                    <div className="col-12">
                    </div>
                </div>
            }
            <div className="row">
                {currentUser && 
                <div className="col-12 col-md-6">
                    <h6>Your Created Cocktails:</h6>
                </div>
                }
                {!currentUser && 
                <div className="col-12 col-md-6">
                    <h6>Latest Community Cockail Creation</h6>
                </div>}

                <div className="col-12 col-md-6">
                    <h6>Site Highlights</h6>
                    <ul>
                        <li>
                            <b>Search</b> - We believe in lifelong learning! If you head over to the search page,
                            you will be able to search for a number of industry-standard cocktails by simply typing in any ingredient!
                            If nothing pops up, then that means we couldn't find a drink with that ingredient. Now is your chance to shine!
                        </li>
                        <li>
                            <b>Cocktails</b> - Every cocktail we know and love started out in someone's kitchen! Feel free to share the latest and
                            greatest cocktail that you've created!
                        </li>
                        <li>
                            <b>Drink History Tours</b> - Every cocktail we know and love started out in someone's kitchen! Feel free to share the latest and
                            greatest cocktail that you've created!
                        </li>
                        <li>
                            <b>Drink Pairings</b> - What's a party without a plethora of cocktails. Do you have a strong opinion about which drinks pair well
                            together? Feel free to let the people know!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;