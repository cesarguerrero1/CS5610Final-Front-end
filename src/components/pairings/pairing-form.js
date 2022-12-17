/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file Pairing Form Page
 */


import React, {useState,} from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunk
import { createPairThunk} from "../../services/thunks/pairing-thunk.js"

function PairingForm(){

    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [firstMainAlcohol, setFirstMainAlcohol] = useState('TEQUILA');
    const [secondMainAlcohol, setSecondMainAlcohol] = useState('VODKA');
    const [thirdMainAlcohol, setThirdMainAlcohol] = useState('WHISKEY');
    const [firstDrinkName, setFirstDrinkName] = useState('');
    const [secondDrinkName, setSecondDrinkName] = useState('');
    const [thirdDrinkName, setThirdDrinkName] = useState('');
    const [pairingTitle, setPairingTitle] = useState('');
    const [pairingDescription, setPairingDescription] = useState('');

    function createPairingClickHandler(){
        if(firstDrinkName === "" || secondDrinkName === "" || thirdDrinkName === "" || pairingTitle === "" || pairingDescription === ""){
            alert("You have to fill out the entire form in order to submit");
            return
        }else if(currentUser === null){
            alert('You must be a member in order to off your pairing advice!');
            return
        }else{
            dispatch(createPairThunk({
                createdBy: currentUser._id,
                firstMainAlcohol,
                secondMainAlcohol,
                thirdMainAlcohol,
                firstDrinkName,
                secondDrinkName,
                thirdDrinkName,
                pairingTitle,
                pairingDescription
            }))

            setTimeout(() => {
                setFirstDrinkName('');
                setSecondDrinkName('');
                setThirdDrinkName('');
                setPairingTitle('');
                setPairingDescription('');
                window.location.reload();
            }, 1000);
        }
    }
    
    return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="w-100 m-auto mb-5 py-5 px-3 wd-form-border">
                <h3 className="text-center">What goes with what?</h3>
                <div>
                    <div className="m-3">
                        <label for="pairMain1" className="form-label">Main Alcohol #1</label>
                        <select id="pairMain1" className="form-select" onChange={(event) => { setFirstMainAlcohol(event.target.value) }}>
                            <option value="TEQUILA" selected>TEQUILA</option>
                            <option value="VODKA">VODKA</option>
                            <option value="WHISKEY">WHISKEY</option>
                            <option value="RUM">RUM</option>
                            <option value="GIN">GIN</option>
                        </select>
                        <label for="pairMain2" className="form-label">Main Alcohol #2</label>
                        <select id="pairMain2" className="form-select" onChange={(event) => { setSecondMainAlcohol(event.target.value) }}>
                            <option value="TEQUILA" >TEQUILA</option>
                            <option value="VODKA" selected>VODKA</option>
                            <option value="WHISKEY">WHISKEY</option>
                            <option value="RUM">RUM</option>
                            <option value="GIN">GIN</option>
                        </select>
                        <label for="pairMain3" className="form-label">Main Alcohol #3</label>
                        <select id="pairMain3" className="form-select" onChange={(event) => { setThirdMainAlcohol(event.target.value) }}>
                            <option value="TEQUILA" >TEQUILA</option>
                            <option value="VODKA">VODKA</option>
                            <option value="WHISKEY" selected>WHISKEY</option>
                            <option value="RUM">RUM</option>
                            <option value="GIN">GIN</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <label for="pairDrink1" className="form-label">Drink Name #1</label>
                        <input id="pairDrink1" className="form-control" placeholder="Enter the name of drink #1..." type="text" value={firstDrinkName} onChange={(event) => { setFirstDrinkName(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="pairDrink2" className="form-label">Drink Name #2</label>
                        <input id="pairDrink2" className="form-control" placeholder="Enter the name of drink #2..." type="text" value={secondDrinkName} onChange={(event) => { setSecondDrinkName(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="pairDrink3" className="form-label">Drink Name #3</label>
                        <input id="pairDrink3" className="form-control" placeholder="Enter the name of drink #3..." type="text" value={thirdDrinkName} onChange={(event) => { setThirdDrinkName(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="pairTitle" className="form-label">Pairing Title</label>
                        <input id="pairTitle" className="form-control" placeholder="What is a snazzy name for this pairing?" type="text" value={pairingTitle} onChange={(event) => { setPairingTitle(event.target.value) }} />
                    </div>
                    <div className="m-3">
                        <label for="pairDescription" className="form-label">Why this works:</label>
                        <textarea id="pairDescription" className="form-control" placeholder="Here is why you need to give this a chance!" value={pairingDescription} onChange={(event) => { setPairingDescription(event.target.value) }}></textarea>
                    </div>
                    <button className='btn wd-button w-50 m-auto' onClick={createPairingClickHandler}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default PairingForm;