import React from "react";
import {connect} from "react-redux";
import FriendsList from "./FriendsList";


class FriendsListContainer extends React.Component{
    render() {
        return <FriendsList
            friends = {this.props.friends}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        friends:state.mainData.profileFriends

    }
}
export default connect(mapStateToProps)(FriendsListContainer)