import {
    RESET_ACTION,
    ACTION_CONFIG_SERVICE_URL,
    USER_DATA,
} from '../utils/constants';

export const initialState = {
    urlServices: 'http://192.168.1.102:12500/api/nodeapi/',
    userdata: [],

};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case RESET_ACTION:
            return initialState;
        case ACTION_CONFIG_SERVICE_URL:
            return { ...state, urlServices: action.payload };
        case USER_DATA:
            return { ...state, userdata: action.payload };
        default:
            return state;
    }
}