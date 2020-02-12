import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {LOG_IN} from "../redux/constants/userTypes";
import {Redirect} from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './Connection.css'
import axios from "axios";

function Connection() {

    const  [redirect, setRedirect ] = useState(false);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    if (redirect) {
        return <Redirect to="/"/>
    }

    function login() {

        const body = {
            'username': username,
            'password': password
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(
            "http://localhost:8000/api/login_check",
            body,
            config
        ).then(
            (response) => {
                sessionStorage.setItem('jwtToken', response.data.token);
                dispatch({ type: LOG_IN, value: true});
                setRedirect(true);
            },
            (error) => {
                console.log(error)
            }
        )

    }

    return(
        <form noValidate autoComplete="off">
            <TextField required label="Pseudo" value={username}
                       onChange={e =>setUsername(e.target.value)}
            />
            <TextField required label="Mot de passe" type="password" value={password}
                       onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={() => login()}>Connexion</Button>
        </form>
    );
}

export default Connection;
