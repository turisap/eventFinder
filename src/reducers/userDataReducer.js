/**
 * Created by HP on 25-Dec-17.
 */
import {} from '../actions/userData';
import {
    SET_USER_LOCATION,
    SET_USER_LOCALITY,
    SIGN_USER_IN,
    SET_AUTH_ERROR,
    SIGN_USER_UP,
    SIGN_USER_OUT
} from '../actions/types';

const userDataReducerDefaultState = {
    location : {},
    locality : '',
    authenticated : false,
    jwtToken : '',
    authErrors : ''
};

export default (state=userDataReducerDefaultState, action) => {
    switch(action.type) {
        case SET_USER_LOCATION:
            return {
                ...state,
                location : {
                    latitude  : action.location.latitude,
                    longitude : action.location.longitude
                }
            };
            break;
        case SET_USER_LOCALITY:
            return {
                ...state,
                locality : action.locality
            };
            break;
        case SIGN_USER_IN:
            return {
                ...state,
                authenticated : true,
                jwtToken : action.jwtToken,
                authErrors : ''
            };
            break;
        case SET_AUTH_ERROR:
            return {
                ...state,
                authErrors : action.error
            };
            break;
        case SIGN_USER_UP:
            return {
                ...state,
                authenticated : true,
                jwtToken : action.jwtToken,
                authError : ''
            };
            break;
        case SIGN_USER_OUT:
            return {
                ...state,
                authenticated : false
            };
            break;
        default:
            return state;
    }
};