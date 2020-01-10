import { LOGGED_IN, LOGGED_OUT } from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    token: null,
    userId: null,
}

export const authReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case LOGGED_IN: 
            state.loggedIn = true;
            state.token = action.payload.token;
            state.userId = action.payload.user.userId;
            return {
                ...state,
                payload: { ...action.payload }
            }

        case LOGGED_OUT:
                state.loggedIn = false;
                state.token = null;
                state.userId = null;
                return {
                    ...state,
                    payload: { ...action.payload }
                }
    }
}