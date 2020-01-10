import { 
    LOGGED_IN, 
    LOGGED_OUT, 
    REGISTRATION_FAIL, 
    REGISTRATION_START, 
    REGISTRATION_STOP, 
    REGISTRATION_SUCCESS 
} from './actionTypes';
import axios from 'axios';

function authStart() {
    return {
        type: REGISTRATION_START
    }
}

function authStop() {
    return {
        type: REGISTRATION_STOP
    }
}

export const login = (credentials) => {
    return (dispatch) => {
        axios({
            url: "/login",
            method: "POST",
            data: credentials
        })
        .then((response) => {
            console.log(response);
            dispatch({
                type: LOGGED_IN,
                payload: response
            })
        })
        .catch((error) => {
            dispatch({
                type: LOGGED_OUT,
                payload: error
            })
        })
    }
}

export const register = (payload) => {
    return (dispatch) => {
        axios({
            url: "/register",
            method: "POST",
            data: payload
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: REGISTRATION_SUCCESS,
                    payload: response.data
                })
            }
        })
        .catch((error) => {
            dispatch({
                type: REGISTRATION_FAIL,
                payload: error
            })
        })
    }
}