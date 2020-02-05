function login(state, action) {

    let nextState;

    switch (action.type) {
        case 'LOG_IN':
            nextState = {
                ...state,
                login: action.value
            };
            return nextState;
        case 'LOG_OUT':
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