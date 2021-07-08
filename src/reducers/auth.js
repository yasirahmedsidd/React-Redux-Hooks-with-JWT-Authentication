import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types"

const user = JSON.parse(localStorage.getItem("user"));


const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null }


export default (state = initialState, { type, payload }) => {
    switch (type) {

        case REGISTER_SUCCESS:
        case REGISTER_FAIL:
            return { ...state, isLoggedIn: false }

        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: payload.user }

        case LOGIN_FAIL:
        case LOGOUT:
            return { ...state, isLoggedIn: false, user: null }

        default:
            return state
    }
}
