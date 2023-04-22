import moment from 'moment';
import Services from '../services';
import Line from '@xmartlabs/react-native-line'

import { AUTH_LINE_ERROR, AUTH_LINE_SUCCESS, AUTH_LINE_TOKEN } from '../utils/constants'
import { setInputLogin, getInputLogin, delAsyncStorage } from '../helper/asyncStorage';

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
        let userOBJ = await getInputLogin();
        let data = userOBJ != null ? userOBJ : null;
        if (data) {
            dispatch({ type: AUTH_LINE_SUCCESS, payload: data.loginResult });
        } else {
            const loginResult = await Line.login({
                scopes: ['email', 'openid', 'profile'],
                botPrompt: 'normal'
            }).then(rs => {
                setInputLogin(JSON.stringify({ loginResult: rs }));
                return rs;
            }).catch(err => {
                dispatch({ type: AUTH_LINE_ERROR, payload: err.message });
                return;
            });
            dispatch({ type: AUTH_LINE_TOKEN, payload: loginResult.accessToken });
            dispatch({ type: AUTH_LINE_SUCCESS, payload: loginResult });
        }
        navigate('HomeScreen');
    } catch (error) {
        dispatch({ type: AUTH_LINE_ERROR, payload: error.message });
        console.log('AUTH_LINE_ERROR', error.message);
    }
}

