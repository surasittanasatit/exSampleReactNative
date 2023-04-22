import {
    RESET_ACTION,
    ACTION_CONFIG_SERVICE_URL,
    USER_DATA,
    AUTH_LINE_ERROR,
    AUTH_LINE_SUCCESS,
    AUTH_LINE_TOKEN,
} from '../utils/constants';

export const initialState = {
    urlServices: 'http://192.168.1.102:12500/api/nodeapi/',
    userdata: [],
    error: '',
    lineloginresult: null,
    linetoken: '',
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case RESET_ACTION:
            return initialState;
        case ACTION_CONFIG_SERVICE_URL:
            return { ...state, urlServices: action.payload };
        case USER_DATA:
            return { ...state, userdata: action.payload };
        case AUTH_LINE_ERROR:
            return { ...state, error: action.payload };
        case AUTH_LINE_SUCCESS:
            return { ...state, lineloginresult: action.payload };
        case AUTH_LINE_TOKEN:
            return { ...state, linetoken: action.payload };
        default:
            return state;
    }
}
