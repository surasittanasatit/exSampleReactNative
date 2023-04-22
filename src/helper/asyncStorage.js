import AsyncStorage from '@react-native-async-storage/async-storage';

export const setInputLogin = async _obj => {
    await AsyncStorage.setItem('remem', JSON.stringify(JSON.parse(_obj)));
};

export const getInputLogin = async () => {
    return new Promise(async resolve => {
        const _t = await AsyncStorage.getItem('remem');
        const remem = JSON.parse(_t);
        resolve(remem);
    });
};

export const setColorMode = (value) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            await AsyncStorage.setItem('@color-mode', value);
            resolve(true);
        } catch (e) {
            console.log('saving error :', e);
            reject(e);
        }
    });
    return promise;
}

export const getColorMode = () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const colorMode = await AsyncStorage.getItem('@color-mode');
            resolve(colorMode);
        } catch (e) {
            console.log('error reading value :', e);
            reject(e);
        }
    });
    return promise;
}

export const delAsyncStorage = (name) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            await AsyncStorage.removeItem(name);
        }
        catch (e) {
            console.log('error delete value', e);
            reject(false);
        }
    });
    return promise;
}
