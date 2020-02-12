import * as types from "../constants/userTypes"

function login(state= false, action) {

    let nextState;

    switch (action.type) {
        case types.LOG_IN:
            nextState = {
                ...state,
                login: action.value
            };
            return nextState;
        case types.LOG_OUT:
            nextState = {
                ...state,
                login: action.value
            };
            return nextState;
        default:
            return state;
    }
}

export default login;
