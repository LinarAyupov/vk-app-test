import React from "react";
import Friend from "./Friend";

const FriendsList = (props) => {
    const friendsShow = () => {
        return props.friends.map(friend => {
            return <Friend
                avtar={friend.photo_50}
                name={friend.first_name + ' ' + friend.last_name}
                key={friend.id}
            />
        })

    }
    return (
        <div className="friends-list">
            {friendsShow()}
        </div>
    )
}

export default FriendsList;