import { Platform } from 'react-native'
import { request as requestPermissions, checkMultiple, PERMISSIONS, openSettings } from 'react-native-permissions';

export const requestPermissionsAccept = async () => {
    let cameraStatus, locationStatus, readstorage, writestorage, microphoneStatus = '', readpgonreStatus = '';
    let status = false;
    if (Platform.OS == 'ios') {
        locationStatus = await requestPermissions(PERMISSIONS.IOS.LOCATION_ALWAYS);
        cameraStatus = await requestPermissions(PERMISSIONS.IOS.CAMERA);
        readstorage = await requestPermissions(PERMISSIONS.IOS.PHOTO_LIBRARY);
        microphoneStatus = await requestPermissions(PERMISSIONS.IOS.MICROPHONE);
        if (cameraStatus == 'granted' && locationStatus == 'granted' && readstorage == 'granted' && microphoneStatus == 'granted') {
            status = true;
        } else {
            openSettings().catch(() => console.warn('cannot open settings'));
            status = false;
        }
    } else {
        locationStatus = await requestPermissions(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        cameraStatus = await requestPermissions(PERMISSIONS.ANDROID.CAMERA);
        readstorage = await requestPermissions(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        writestorage = await requestPermissions(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        microphoneStatus = await requestPermissions(PERMISSIONS.ANDROID.RECORD_AUDIO);
        if (cameraStatus == 'granted' && locationStatus == 'granted' && readstorage == 'granted' && writestorage == 'granted' && microphoneStatus == 'granted' && readpgonreStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    }
    return status;
}

export const checkPermissionsAccept = async () => {
    let cameraStatus, locationStatus, readstorage, writestorage, microphoneStatus = '', readpgonreStatus = '';
    let status = false;
    if (Platform.OS == 'ios') {
        await checkMultiple([
            PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.LOCATION_ALWAYS,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
            PERMISSIONS.IOS.MICROPHONE,
        ]).then((statuses) => {
            cameraStatus = statuses[PERMISSIONS.IOS.CAMERA];
            locationStatus = statuses[PERMISSIONS.IOS.LOCATION_ALWAYS];
            readstorage = statuses[PERMISSIONS.IOS.PHOTO_LIBRARY];
            microphoneStatus = statuses[PERMISSIONS.IOS.MICROPHONE];
        });
        if (cameraStatus == 'granted' && locationStatus == 'granted' && readstorage == 'granted' && microphoneStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    } else {
        await checkMultiple([
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.RECORD_AUDIO,
        ]).then((statuses) => {
            cameraStatus = statuses[PERMISSIONS.ANDROID.CAMERA];
            locationStatus = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
            readstorage = statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
            writestorage = statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
            microphoneStatus = statuses[PERMISSIONS.ANDROID.RECORD_AUDIO];
        });
        if (cameraStatus == 'granted' && locationStatus == 'granted' &&
            readstorage == 'granted' && writestorage == 'granted' &&
            microphoneStatus == 'granted' && readpgonreStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    }
    return status;
}

export const requestLocationAccept = async () => {
    let locationStatus = '';
    let status = false;
    if (Platform.OS == 'ios') {
        locationStatus = await requestPermissions(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (locationStatus == 'granted') {
            status = true;
        } else {
            openSettings().catch(() => console.warn('cannot open settings'));
            status = false;
        }
    } else {
        locationStatus = await requestPermissions(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (locationStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    }
    return status;
}

export const checkLocationAccept = async () => {
    let locationStatus = '';
    let status = false;
    if (Platform.OS == 'ios') {
        await checkMultiple([
            PERMISSIONS.IOS.LOCATION_ALWAYS
        ]).then((statuses) => {
            locationStatus = statuses[PERMISSIONS.IOS.LOCATION_ALWAYS];
        });
        if (locationStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    } else {
        await checkMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ]).then((statuses) => {
            locationStatus = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
        });
        if (locationStatus == 'granted') {
            status = true;
        } else {
            status = false;
        }
    }
    return status;
}