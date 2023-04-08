import {
    RESET_ACTION,
    ACTION_CONFIG_SERVICE_URL,
} from '../utils/constants';

export const initialState = {
    urlServices: 'http://192.168.2.39:12500/api/nodeapi/',

};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case RESET_ACTION:
            return initialState;
        case ACTION_CONFIG_SERVICE_URL:
            return { ...state, urlServices: action.payload };
        default:
            return state;
    }
}