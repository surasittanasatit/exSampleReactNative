import React, { useState, useEffect, useContext } from 'react'
import { View, Text, BackHandler, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { Box, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'
import Appbar from '../../components/appBar'

import { checkPermissionsAccept, requestPermissionsAccept } from '../../utils/permissions'
import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import theme from '../../theme/styles'
import styles from './styles';

const HomeScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const [userId, setUserID] = useState('')
    const [fullName, setFullName] = useState('')

    const init = async () => {
        let checkPermissions = await checkPermissionsAccept();
        if (checkPermissions != true) {
            await requestPermissionsAccept();
        }

        let userobj = props.userdata[0];
        setUserID(userobj.userId);
        setFullName(userobj.fristName + ' ' + userobj.lastName);
    }

    useEffect(() => {
        if (didMount) {
            init();
        }
    }, [])

    return (
        <BoxView lockscreen={true}>
            <Appbar
                isStyleAppBar={1}
                textTitle={'Home'}
                onClickLogout={() => { navigateReset('LoginScreen') }}
            />
            <View style={styles.memberContainer}>
                <ImageBackground source={require('@asset/images/bg_main.png')} imageStyle='cover' style={styles.curveImg} >
                    <View style={styles.profile}>
                        <Image source={require('@asset/images/avatar.png')} style={styles.avatar} />
                        <View style={{ marginLeft: 5 }} >
                            <Text style={styles.profileName}>{userId}</Text>
                            <Text style={styles.profileLocation}>{fullName}</Text>
                        </View>
                    </View>
                    <View style={styles.btnLayout}>
                        <TouchableOpacity style={styles.btnBox} onPress={() => { navigate('Camera') }}>
                            <Image source={require('@asset/images/btn-ads.png')} style={styles.btnImg} />
                            <Text style={styles.btnText}>{'Camera'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnBox} onPress={() => { }} >
                            <Image source={require('@asset/images/btn-message.png')} resizeMode='cover' style={styles.btnImg} />
                            <Text style={styles.btnText}>{'Upload'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnBox} onPress={() => { }} >
                            <Image source={require('@asset/images/btn-car.png')} style={styles.btnImg} />
                            <Text style={styles.btnText}>{'Map Location'}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </BoxView>
    )
}

export default HomeScreen