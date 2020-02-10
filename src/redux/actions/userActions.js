import * as types from "../constants/userTypes"

export const login = (value) => ({
    type: types.LOG_IN,
    value: value
});

export const logout = (value) => ({
    type: types.LOG_OUT,
    value: value
});