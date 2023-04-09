import React, { useState, useEffect, useContext } from 'react'
import { View, Text, BackHandler, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'
import { Box, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'
import Appbar from '../../components/appBar'

import { registerNewUser } from '../../action/registerAction';
import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import theme from '../../theme/styles'
import styles from './styles';

const RegisterScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const init = async () => {

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


    const onClickSaveHandler = async () => {
        Keyboard.dismiss();
        let rsRegister = await registerNewUser(props.urlServices,
            username,
            password,
            firstname,
            lastname);
        if (rsRegister.data.status == true) {
            Alert.alert('Alert', rsRegister.data.result, [
                { text: 'OK', onPress: () => goBack() },
            ]);
        } else {
            Alert.alert('Alert error', rsRegister.data);
        }
    }

    return (
        <BoxView lockscreen={true}>
            <ImageBackground source={require('@asset/images/bg_main.png')} imageStyle='cover' style={styles.bgCover}>
                <Appbar
                    isStyleAppBar={0}
                    onClickBack={() => { goBack() }}
                    textTitle={'Register User'}
                />
                <View style={styles.section}>
                    <View style={styles.signBg}>
                        <View style={theme.row}>
                            <TextInput
                                value={firstname}
                                style={styles.textInput}
                                onChangeText={(text) => { setFirstName(text) }}
                                placeholder={'First Name'} />
                        </View>
                        <View style={theme.row}>
                            <TextInput
                                value={lastname}
                                style={styles.textInput}
                                onChangeText={(text) => { setLastName(text) }}
                                placeholder={'Last Name'} />
                        </View>
                    </View>

                    <View style={[styles.signBg, { marginTop: 5 }]}>
                        <View style={theme.row}>
                            <TextInput
                                value={username}
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
                    </View>

                    <TouchableOpacity
                        style={styles.btn2} onPress={() => { onClickSaveHandler() }}>
                        <Text style={styles.loginBtnText}>{'Save'}</Text>
                        <Icon as={<Feather />} name="user-plus" color={'#FFFFFF'} size={'md'} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </BoxView>
    )
}

export default RegisterScreen