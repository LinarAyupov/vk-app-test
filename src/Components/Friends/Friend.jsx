import React from "react";

const Friend = (props) => {
    return <div className="friends_item">
        <img src={props.avtar} alt="avatar"/>
        <div className="friendName">
            {props.name}
        </div>
    </div>
}
export default Friend;
