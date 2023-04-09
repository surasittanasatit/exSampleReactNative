import RNGeolocation from 'react-native-geolocation-service';

function GetCurrentLocation(status) {
    return new Promise(async (resolve, reject) => {
        let location = { latitude: '', longitude: '', accuracy: 0 };
        await RNGeolocation.getCurrentPosition(
            (position) => {
                const latitude = toFixed(position.coords.latitude, 6);
                const longitude = toFixed(position.coords.longitude, 6);
                location.latitude = latitude;
                location.longitude = longitude;
                location.accuracy = toFixed(position.coords.longitude, 2);
                resolve(location);
            },
            (error) => console.log(new Date(), error),
            { enableHighAccuracy: status, timeout: 15000, maximumAge: 10000 }
        );
    })
}

function GetWatchLocation() {
    return new Promise(async (resolve, reject) => {
        let location = {
            latitude: '',
            longitude: '',
            accuracy: 0
        };
        let watchId = await RNGeolocation.watchPosition(
            (position) => {
                const latitude = toFixed(position.coords.latitude, 6);
                const longitude = toFixed(position.coords.longitude, 6);
                location.latitude = latitude;
                location.longitude = longitude;
                location.accuracy = toFixed(position.coords.longitude, 2);
                RNGeolocation.clearWatch(watchId);
                resolve(location);
            },
            (error) => {
                console.log(new Date(), error);
                reject(false)
            },
            {
                distanceFilter: 1,
                enableHighAccuracy: false,
                maximumAge: 1000,
                useSignificantChanges: false,
            }
        );
    });
}

function toFixed(num, pre) {
    num *= Math.pow(10, pre);
    num =
        (Math.round(num, pre) + (num - Math.round(num, pre) >= 0.5 ? 1 : 0)) /
        Math.pow(10, pre);
    return num.toFixed(pre);
};

export default {
    GetCurrentLocation,
    GetWatchLocation,
    toFixed
}