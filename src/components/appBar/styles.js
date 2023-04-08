import { StyleSheet, StatusBar, Platform } from 'react-native';
import { FAMILY, COLOR } from '../../theme/typography'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 55 : 56;

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: COLOR.sky,
        height: APPBAR_HEIGHT,
    },
    appBarTransparent: {
        height: APPBAR_HEIGHT,
    },
    textTitle: {
        fontWeight: '400',
        color: '#FFF'
    },
    buttonContainer: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        width: 35,
        height: 35,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.5)'
    },
    btnLogoutStyle: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        width: 39,
        height: 39,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.5)'
    },
    btnSaveStyle: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        height: 35,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.5)'
    },
    btnRotateStyle: {
        backgroundColor: COLOR.background,
        width: 39,
        height: 39,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.5)'
    },
    btnBackStyle: {
        width: '100%',
        height: 35,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnBackStyle2: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        width: 39,
        height: 39,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnBackStyle3: {
        backgroundColor: COLOR.white,
        width: 39,
        height: 39,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBarLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    actionBarCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBarRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export default styles;
