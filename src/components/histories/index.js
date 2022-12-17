/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Histories Page
 */


import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { deleteTourThunk, findAllToursThunk } from "../../services/thunks/tour-thunk.js";

import CreateHistory from "./history-form.js";

function HistoryTours(){

    const { currentUser } = useSelector(state => state.users);
    const {allTours} = useSelector((state) => state.tours)
    const dispatch = useDispatch();

    function deleteTourClickHandler(tourID){
        dispatch(deleteTourThunk(tourID));
    }

    useEffect(() => {
        dispatch(findAllToursThunk());
    }, [dispatch]) 

    return(
        <div className="row">
            <CreateHistory/>
            <div className="col-12 col-md-7 px-3">
                <h3>Historical Accounts</h3>
                <ul className="list-group">
                    {allTours.map((history) => {
                        return(
                            <li key={history._id} className="list-group-item">
                                <div>
                                    <h4>{history.author.username} - (Posted On: {history.creationDate.slice(0,10)})</h4>
                                    <h6><b>Drink Name:</b>{history.drinkName}</h6>
                                    <h6><b>Main Alcohol:</b>{history.mainAlcohol}</h6>
                                    <h6><b>Title:</b>{history.tourTitle}</h6>
                                    <h6><b>Historical Account:</b></h6>
                                    <p>{history.tourBody}</p>
                                </div>
                                {currentUser && currentUser._id === history.author._id && <button className="btn wd-delete-button" onClick={() => {deleteTourClickHandler(history._id)}}>Delete</button>}
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default HistoryTours;