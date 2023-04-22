import React, { useState, useEffect, useContext, useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, View, Text, HStack, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import QRCodeScanner from 'react-native-qrcode-scanner';

import theme from '../../theme/styles'
import Styles from './styles';

const QrCodeScreen = () => {
    let qrCodeElement = useRef();
    const onSuccessRead = (e) => {
        console.log('QR Code data', e.data)
    }


    return (
        <View>
            <QRCodeScanner
                showMarker
                ref={(node) => { qrCodeElement = node }}
                onRead={onSuccessRead}
                cameraStyle={{ height: '100%' }}
                customMarker={
                    <View style={Styles.rectangleContainer}>
                        <View style={Styles.topOverlay}>
                            <View style={{ justifyContent: 'flex-start', paddingHorizontal: 5 }} >
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-start' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} w={'100%'} >
                                        <TouchableOpacity onPress={() => { }}>
                                            <HStack alignItems={'center'} >
                                                <Icon as={<MaterialCommunityIcons name="chevron-left" />} color={'#FFFFFF'} size={'md'} />
                                                <Text color={'white'} fontSize={'md'} underline>
                                                    {' Back'.toUpperCase()}
                                                </Text>
                                            </HStack>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.topOverlay2}>
                            <Text color={'white'} fontSize={'4xl'} >
                                {'QR CODE SCANNER'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <View style={Styles.leftAndRightOverlay} />
                            <View style={Styles.rectangle}>
                                <Icon as={<MaterialIcons name="crop-free" />} color={'#ffff'} size={350} />
                            </View>
                            <View style={Styles.leftAndRightOverlay} />
                        </View>
                        <View style={[Styles.bottomOverlay, { alignItems: 'center', marginTop: 20 }]} >
                            <Text color={'white'} fontSize={'lg'} >
                                {'Scan QR Code'}
                            </Text>
                        </View>
                    </View>
                }
                reactivate={true}
                fadeIn={false}
                reactivateTimeout={2000}
            />
        </View>
    )
}

export default QrCodeScreen