import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {LOG_IN} from "../redux/constants/userTypes";
import {Redirect} from "react-router";

function Connection() {

    const  [redirect, setRedirect ] = useState(false);

    const dispatch = useDispatch();

    if (redirect) {
        return <Redirect to="/"/>
    }

    function login() {
        dispatch({ type: LOG_IN, value: true});
        setRedirect(true)
    }

    return(
        <div>
            LA PAGE DE CONNEXION
            <button onClick={() => login()}>Connexion</button>
        </div>
    );
}

export default Connection;
