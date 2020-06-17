import React from "react";
import {connect} from "react-redux";
import Form from "./Form";
import {changeInputValue, setProfileToState} from "../../Redux/main-reducer";
import * as axios from "axios-jsonp-pro"


class FormContainer extends React.Component {


    showProfile = () => {
        return axios.jsonp(`https://api.vk.com/method/users.get?user_ids=${this.props.profileId}&fields=photo_100&access_token=c3ca8feff78ceaa45229162f42ecaa30f951a3e0b56c99f7102f2e0287ed8ec93c5a9419872cd997c8432&v=5.52`)
            .then(
                response => {
                    if (response === undefined) {
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