import React, { useState, useEffect, useContext } from 'react'
import { View, Text, BackHandler } from 'react-native'
import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'

import { TestConnectService } from '../../action/loginAction';
import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import theme from '../../theme/styles'

const LoginScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const init = async () => {
        let rsTestConnectService = await TestConnectService(props.urlServices);
        console.log(rsTestConnectService);
    };

    useEffect(() => {
        if (useDidMount) {
            init();
        }
        const backAction = () => { return true };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction);
        return () => backHandler.remove();
    }, []);

    return (
        <BoxView lockscreen={true}>
            <Text>index</Text>
        </BoxView>
    )
}

export default LoginScreen