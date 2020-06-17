import React from "react";
import {NavLink} from "react-router-dom";


const Profile = (props) => {

    return (
        <div className="profile">
            <div className="profile__avatar">
                <img src={props.profile.photo_100} alt="" className="profile__avatar-img"/>
            </div>
            <div className="profile__name">{`name: ${props.profile.first_name} ${props.profile.last_name}`}
            </div>
            <NavLink to='/profile/friends'>
                <button onClick={props.showFriends} className="btn profile__btn">Show Friends</button>
            </NavLink>
        </div>
    )
}

export default Profile;