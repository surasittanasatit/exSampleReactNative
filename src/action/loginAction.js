import moment from 'moment';
import Services from '../services';

export const TestConnectService = async (url) => {
    let result = await Services.test_connect_service(url).then(rs => {
        return rs;
    }).catch(err => {
        return err
    });
    return result;
}
