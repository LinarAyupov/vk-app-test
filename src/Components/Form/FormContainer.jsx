import React from "react";
import {connect} from "react-redux";
import Form from "./Form";
import {changeInputValue, setProfileToState} from "../../Redux/main-reducer";
import * as axios from "axios-jsonp-pro"


class FormContainer extends React.Component {


    showProfile = () => {
        return axios.jsonp(`https://api.vk.com/method/users.get?user_ids=${this.props.profileId}&fields=photo_100&access_token=ced3d1c5e063948f859fdc9d6613a2f4dcfcd07b91bfc1327fc7640b864363f99f9a3645a2c6a0f35ab46&v=5.52`)
            .then(
                response => {
                    if (response.response === undefined) {
                        alert("Invalid id")
                    } else if (response.response.length === 0){
                        alert("Invalid id")
                    } else {
                        this.props.setProfileToState(response.response[0])
                    }
                }
            )
    }

    render() {
        return <>
            <Form
                changeInputValue={this.props.changeInputValue}
                inputText={this.props.inputText}
                showProfile={this.showProfile}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        inputText: state.mainData.inputValue,
        profileId: state.mainData.inputValue,
    }
}


export default connect(mapStateToProps, {changeInputValue, setProfileToState})(FormContainer);