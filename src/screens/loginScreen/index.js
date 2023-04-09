import React, { useState, useEffect, useContext } from 'react'
import { View, Text, BackHandler, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { Box, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'

import { TestConnectService } from '../../action/loginAction';
import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import theme from '../../theme/styles'
import styles from './styles';

const LoginScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const init = async () => {
        let rsTestConnectService = await TestConnectService(props.urlServices);
        console.log(rsTestConnectService);
    };

    useEffect(() => {
        if (didMount) {
            init();
        }
        const backAction = () => { return true };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction);
        return () => backHandler.remove();
    }, []);

    const onClickHandler = async () => {
        Keyboard.dismiss();
        console.log('Login Action :', userName, password);
    }

    const onClickRegisterHandler = async () => {
        Keyboard.dismiss();
        navigate('RegisterScreen');
    }

    return (
        <BoxView lockscreen={true}>
            <ImageBackground source={require('@asset/images/bg_main.png')} imageStyle='cover' style={styles.bgCover}>
                <View style={styles.section}>
                    <View style={styles.logo}>
                        <Image source={require('@asset/images/logo.png')} />
                    </View>
                    <View style={styles.signBg}>
                        <View style={theme.row}>
                            <TextInput
                                value={userName}
                                style={styles.textInput}
                                onChangeText={(text) => { setUserName(text) }}
                                placeholder={'Username'} />
                        </View>
                        <View style={theme.row}>
                            <TextInput
                                value={password}
                                style={styles.textInput}
                                onChangeText={(text) => { setPassword(text) }}
                                secureTextEntry={true}
                                placeholder={'Password'} />
                        </View>
                        <TouchableOpacity
                            style={styles.btn} onPress={() => { onClickHandler() }}>
                            <Text style={styles.loginBtnText}>{'SignIn'}</Text>
                            <Icon as={<MaterialCommunityIcons />} name="arrow-right" color={'#FFFFFF'} size={'md'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.btn2} onPress={() => { onClickRegisterHandler() }}>
                        <Text style={styles.loginBtnText}>{'Register'}</Text>
                        <Icon as={<Feather />} name="user-plus" color={'#FFFFFF'} size={'md'} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </BoxView>
    )
}

export default LoginScreen