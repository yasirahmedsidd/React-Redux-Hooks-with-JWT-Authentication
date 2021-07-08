import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_MESSAGE:
            return { message: payload }

        case CLEAR_MESSAGE:
            return { message: "" }

        default:
            return state
    }
}
