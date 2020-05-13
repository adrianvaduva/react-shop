import * as types from "../actions/actionTypes"

const initialState = {
    data: null,
    loading: false,
    error: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.UPDATE_USER_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case types.UPDATE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
