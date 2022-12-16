/**
 * Cesar Guerrero
 * 12/15/22
 * CS5610 - Final Project
 * 
 * @file This is our admin page!
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";


function PublicProfile() {
    const { uid } = useParams();
    const [publicUser, setPublicUser] = useState(null);
    const { allUsers } = useSelector((state) => state.users);

    useEffect(() => {
        const user = allUsers.find((user) => { return user._id === uid });
        setPublicUser(user);
    })

    return (
        <div>
            {publicUser &&
                <div>
                    <div className="=col-12">
                        <h6>Username: {publicUser.username}</h6>
                        <h6>Account Type: {publicUser.accountType}</h6>
                        {publicUser.accounType === "CONNOISSEUR" && <h6>Favorite Drink: {publicUser.favoriteDrink}</h6>}
                        {publicUser.accounType === "BARTENDER" && <h6>Currently Working: {publicUser.currentWorkplace} ({publicUser.yearsOfExperience} Years of Experience)</h6>}
                    </div>
                    <div className="=col-12">
                        <h5>My Cocktails</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Histories</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Pairings</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Reviews</h5>
                    </div>
                    <div className="=col-12">
                        <h5>My Endorsements</h5>
                    </div>
                </div>
            }
        </div>
    )

}

export default PublicProfile;