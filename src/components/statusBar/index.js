import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

import { getStatusBarHeight } from '../../helper/iphoneCheck';
// here, we add the spacing for iOS
// and pass the rest of the props to React Native's StatusBar

export default function (props) {
    const height = (Platform.OS === 'ios') ? getStatusBarHeight() : 0;

    return (
        <View style={{
            backgroundColor: '#38405a',
            height: props.lock == true ? height :
                props.orientation == 'PORTRAIT' ||
                    props.orientation == 'FACE-UP' ||
                    props.orientation == 'PORTRAIT-UPSIDEDOWN' ?
                    height : 8
        }}>
            <StatusBar {...props} />
        </View>
    );
}