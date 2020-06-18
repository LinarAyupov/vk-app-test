import React from "react";
import {connect} from "react-redux";
import Form from "./Form";
import {changeInputValue, setProfileToState} from "../../Redux/main-reducer";
import * as axios from "axios-jsonp-pro"


class FormContainer extends React.Component {


    showProfile = () => {
        return axios.jsonp(`https://api.vk.com/method/users.get?user_ids=${this.props.profileId}&fields=photo_100&access_token=3667a9113667a9113667a911b836150a1a336673667a911688f6547e73321d48e3f1db1&v=5.52`)
            .then(
                response => {
                    if (response.response === undefined) {
                        console.log(response)
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