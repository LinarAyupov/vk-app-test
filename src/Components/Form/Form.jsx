import React from "react";
import {NavLink} from "react-router-dom";
const Form = (props) => {
    const newInputText = (e) => {
        let text = e.target.value
        props.changeInputValue(text)
    }
    return (
        <div className="search-form">
            <div className="search-form__title">Enter id profile page</div>
            <input type="text"
                   className="search-form__input"
                   onChange={newInputText}
                   value={props.inputText}
                   maxLength="25"

            />
            <NavLink to='/profile/'>
                <button
                    className="btn search-form__btn"
                    onClick={props.showProfile}
                >Show Profile
                </button>
            </NavLink>
        </div>

    )
}

export default Form;