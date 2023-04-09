import axios from 'axios'
import {
    TEST_CONNECT_SERVICE,
    REGISTER,
} from '../utils/servicenames'

axios.defaults.timeout = 20000;

const test_connect_service = (hostUrl) => {
    return new Promise(async (resolve, reject) => {
        let result = { data: null, error: '', status: false, };
        return axios({
            method: 'GET',
            url: hostUrl + TEST_CONNECT_SERVICE,
            responseType: 'json',
        }).then(function (response) {
            result.data = response.data;
            result.status = true;
            resolve(result);
        }).catch(function (error) {
            console.log('test_connect_service', error);
            if (error.toJSON().message == "timeout of 20000ms exceeded") {
                result.error = { error: 'Network Error', status: 'Service connection timed out' }
            } else {
                result.error = error.toJSON().message
            }
            reject(result);
        });
    });
}

const register = (hostUrl, objItem) => {
    let param =
    {
        "userId": objItem.userId,
        "password": objItem.password,
        "fristName": objItem.fristName,
        "lastName": objItem.lastName,
        "deviceId": objItem.deviceId,
        "apiToken": objItem.apiToken,
        "fcmToken": objItem.fcmToken,
        "createDt": objItem.createDt,
        "updateDt": objItem.updateDt,
    };
    return new Promise(async (resolve, reject) => {
        let result = { data: null, error: '', status: false, };
        return axios({
            method: 'POST',
            url: hostUrl + REGISTER,
            responseType: 'json',
            data: param,
        }).then(function (response) {
            result.data = response.data;
            result.status = true;
            resolve(result);
        }).catch(function (error) {
            console.log('test_connect_service', error);
            if (error.toJSON().message == "timeout of 20000ms exceeded") {
                result.error = { error: 'Network Error', status: 'Service connection timed out' }
            } else {
                result.error = error.toJSON().message
            }
            reject(result);
        });
    });
}

export default {
    test_connect_service,
    register,
};