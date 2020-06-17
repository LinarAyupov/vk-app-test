const CHANGE_INPUT_VALUE = 'CHANGE-INPUT-VALUE'
const SET_PROFILE = 'GET-PROFILE'
const SET_FRIENDS = 'GET-FRIENDS'


const internalState = {
    inputValue:'',
    gotProfile:false,
    profile: {},
    profileFriends: []
}
const mainReducer = (state = internalState,action) => {
        switch (action.type) {
            case CHANGE_INPUT_VALUE: {

                return {
                    ...state,
                    inputValue: action.inputValue,
                }
            }
            case SET_PROFILE: {
                return {
                    ...state,
                    profile:action.profile,
                    gotProfile: true,
                    profileFriends:[]
                }
            }
            case SET_FRIENDS: {
                return {
                    ...state,
                    profileFriends:action.friends
                }
            }
            default:
                return state
        }
}

export const changeInputValue = (inputValue) => {
    return {
        type: CHANGE_INPUT_VALUE,
        inputValue
    }
}
export  const setProfileToState = profile => {
    return {
        type: SET_PROFILE,
        profile,


    }
}
export const setFriendsToState = (friends) => {
    return {
        type: SET_FRIENDS,
        friends
    }
}

export default mainReducer;