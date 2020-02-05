import { createStore } from 'redux';
import login from "./reducers/userReducers";

export default createStore(login);