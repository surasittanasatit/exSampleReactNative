import React, { useContext } from 'react'
import { Platform } from 'react-native'
import { Box, useColorMode, } from 'native-base';

import { AppContext } from '../../context/appContext';
import { ORIENTATION } from '../../utils/constants'
import StatusBar from '../../components/statusBar';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'

const BoxView = ({ children, lockscreen }) => {
    const { colorMode } = useColorMode();
    const { props, dispatch } = useContext(AppContext);

    const BGLightColor = {
        linearGradient: {
            colors: ['#3091fa', '#2b82e1', '#2674c8', '#2165af'],
            start: [0, 0],
            end: [0, 1]
        }
    }

    return (
        <Box flex={1} bg={colorMode === 'dark' ? COLOR.bgDark : BGLightColor} >
            <StatusBar
                lock={lockscreen ? lockscreen : false}
                orientation={props.orientation}
                backgroundColor={Platform.OS == 'ios' ? colorMode === 'dark' ? COLOR.bgDark : BGLightColor : '#000000'}
                barStyle={Platform.OS == 'ios' ? 'light-content' : 'default'} />
            {children}
        </Box>
    )
}

export default BoxView