import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios-jsonp-pro";
import {setFriendsToState} from "../../Redux/main-reducer";
import {Route} from "react-router-dom";
import FriendsListContainer from "../Friends/FriendsListContainer";

class ProfileContainer extends React.Component {

    showFriends = () => {
        return axios.jsonp(`https://api.vk.com/method/friends.search?user_id=${this.props.profile.id}&fields=photo_50&count=1000&access_token=ced3d1c5e063948f859fdc9d6613a2f4dcfcd07b91bfc1327fc7640b864363f99f9a3645a2c6a0f35ab46&v=5.52`)
            .then(
                response => {
                    if (response.response === undefined) {
                        debugger
                        alert('Access denied: this profile is privateAccess denied: this profile is private')
                    } else {
                        this.props.setFriendsToState(response.response.items)
                    }
                }
            )
    }

    render() {
        return (
            <>
                {
                    this.props.gotProfile ?
                        <div>
                            <Profile profile={this.props.profile}
                                     showFriends={this.showFriends}
                            />
                            <Route path='/profile/friends' render={() => <FriendsListContainer/>}/>
                        </div> :
                        <div></div>
                }
            </>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.mainData.profile,
        gotProfile: state.mainData.gotProfile,
    }
}
export default connect(mapStateToProps, {setFriendsToState})(ProfileContainer)