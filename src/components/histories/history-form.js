/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file History Form Page
 */

import React, { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTourThunk } from "../../services/thunks/tour-thunk";

function HistoryForm() {

    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [mainAlcohol, setMainAlcohol] = useState('TEQUILA');
    const [drinkName, setDrinkName] = useState('');
    const [tourTitle, setTourTitle] = useState('');
    const [tourBody, setTourBody] = useState('');

    function createHistoryClickHandler() {
        if (mainAlcohol === "" || drinkName === "" || tourTitle === "" || tourBody === "") {
            alert("You need to fill out the entire form!");
            return
        }else if(currentUser === null){
            alert("You must be a member in order to post historical accounts!");
        }else{
            dispatch(createTourThunk({
                author:currentUser._id,
                mainAlcohol,
                drinkName,
                tourTitle,
                tourBody
            }));
            setTimeout(() => {
                setMainAlcohol('');
                setDrinkName('');
                setTourTitle('');
                setTourBody('');
                window.location.reload();
            }, 1000);
        }
    }

    return (
        <div className="col-12 col-md-4">
            <div className="w-100 m-auto mb-5 py-5 px-3 wd-form-border">
                <h3 className="text-center">Share some history!</h3>
                <div>
                    <div className="m-3">
                        <label for="historyMainAlcohol" className="form-label">Main Alcohol</label>
                        <select id="historyMainAlcohol" className="form-select" onChange={(event) => { setMainAlcohol(event.target.value) }}>
                            <option value="TEQUILA" selected>TEQUILA</option>
                            <option value="VODKA">VODKA</option>
                            <option value="WHISKEY">WHISKEY</option>
                            <option value="RUM">RUM</option>
                            <option value="GIN">GIN</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <label for="historyDrinkName" className="form-label">Drink Name</label>
                        <input id="historyDrinkName" className="form-control" placeholder="Enter the name of your drink..." type="text" value={drinkName} onChange={(event) => { setDrinkName(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="historyTourTitle" className="form-label">Title</label>
                        <input id="historyTourTitle" className="form-control" placeholder="What are you titling this anecdote?" type="text" value={tourTitle} onChange={(event) => { setTourTitle(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="historyTourBody" className="form-label">Historical Account</label>
                        <textarea id="historyTourBody" className="form-control" placeholder="Do you know when Vodka was invented? " value={tourBody} onChange={(event) => { setTourBody(event.target.value) }}></textarea>
                    </div>
                    <button className='btn wd-button w-50 m-auto' onClick={createHistoryClickHandler}>Create</button>
                </div>
            </div>
        </div>

    )
}


export default HistoryForm;
