import moment from 'moment';
import Services from '../services';

export const registerNewUser = async (url, username, password, fristName, lastName) => {
    let data = {
        "userId": username,
        "password": password,
        "fristName": fristName,
        "lastName": lastName,
        "deviceId": '',
        "apiToken": 'dev',
        "fcmToken": '',
        "createDt": moment(new Date).format('YYYYMMDD HHmmss'),
        "updateDt": '',
    };
    console.log(data);
    let result = await Services.register(url, data).then(rs => {
        return rs;
    }).catch(err => {
        return err
    });
    return result;
}
