import moment from 'moment';
import Services from '../services';
import Line from '@xmartlabs/react-native-line'

import { AUTH_LINE_ERROR, AUTH_LINE_SUCCESS } from '../utils/constants'

export const TestConnectService = async (url) => {
    let result = await Services.test_connect_service(url).then(rs => {
        return rs;
    }).catch(err => {
        return err
    });
    return result;
}

export const Login = async (url, username, password) => {
    let result = await Services.login(url, username, password).then(rs => {
        return rs;
    }).catch(err => {
        return err
    });
    return result;
}

export const LineLoginResult = async (dispatch, navigate, Alert) => {
    try {
        const loginResult = await Line.login({
            scopes: ['email', 'openid', 'profile'],
            botPrompt: 'normal'
        })

        dispatch({ type: AUTH_LINE_SUCCESS, payload: loginResult });
        navigate('HomeScreen');
    } catch (error) {
        dispatch({ type: AUTH_LINE_ERROR, payload: error.message });
        Alert.alert('AUTH_LINE_ERROR', error.message);
    }
}