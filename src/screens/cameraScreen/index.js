import React, { useState, useEffect, useRef, useContext } from "react";
import { StatusBar, TouchableOpacity, Image, BackHandler, Dimensions } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from "react-native-camera";
import { useCamera } from 'react-native-camera-hooks';
import { Box, Text, View, Modal, Icon, HStack } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { AppContext } from '../../context/appContext';
import { PHOTO_URI } from '../../utils/constants'

import { goBack } from '../../utils/navigation'
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import styles from "./Styles";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const flashModeOrder = {
    off: "on",
    on: "auto",
    auto: "torch",
    torch: "off"
};

const wbOrder = {
    auto: "sunny",
    sunny: "cloudy",
    cloudy: "shadow",
    shadow: "fluorescent",
    fluorescent: "incandescent",
    incandescent: "auto"
};

const Camera = () => {
    const { props, dispatch } = useContext(AppContext);
    const [{ cameraRef }, { takePicture }] = useCamera(null)
    const [showModalRemark, setShowModalRemark] = useState(false);
    const [remarkImage, setRemarkImage] = useState('');
    const [imageBase64, setImageBase64] = useState('');

    const [state, setState] = useState({
        flash: "off",
        zoom: 0,
        autoFocus: "on",
        autoFocusPoint: {
            normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
            drawRectPosition: {
                x: Dimensions.get('window').width * 0.5,
                y: Dimensions.get('window').height * 0.5,
            },
        },
        depth: 0,
        type: "back",
        whiteBalance: "auto",
        isRecording: true,
        showLoading: false,
        flag: 0,
        typeImage: 0,
        visible: false,
        mileNumber: '',
        mileType: 0,
        mileBase64Photo: '',
        imageParth: '',
        takingPic: false,
    });

    useEffect(() => {
        const backAction = () => { return true };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction);
        return () => backHandler.remove();
    }, []);


    const toggleFacing = () => {
        setState(prveState => { return { ...prveState, type: state.type === "back" ? "front" : "back" } })
    }

    const toggleFlash = () => {
        setState(prveState => { return { ...prveState, flash: flashModeOrder[state.flash] } })
    }

    const toggleWB = () => {
        setState(prveState => { return { ...prveState, whiteBalance: wbOrder[state.whiteBalance] } })
    }

    const toggleFocus = () => {
        setState(prveState => { return { ...prveState, autoFocus: state.autoFocus === "on" ? "off" : "on" } })
    }

    const zoomOut = () => {
        setState(prveState => { return { ...prveState, zoom: state.zoom - 0.1 < 0 ? 0 : state.zoom - 0.1 } })
    }

    const zoomIn = () => {
        setState(prveState => { return { ...prveState, zoom: state.zoom + 0.1 > 1 ? 1 : state.zoom + 0.1 } })
    }

    const onTakePicture = async () => {
        try {
            const options = { quality: 100, doNotSave: false };
            const data = await takePicture(options);
            //save photo to local device
            await CameraRoll.save(data.uri, 'photo').then(onfulfilled => {
                console.log('save succeeded ' + onfulfilled);
            }).catch(function (error) {
                console.error('save failed', error.message);
            });
            console.log(data.uri);
            //dispatch({ type: PHOTO_URI, payload: data.uri });
            setTimeout(() => {
                goBack();
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }

    const renderCamera = () => {
        return (
            <Box flex={1} >
                <RNCamera
                    ref={cameraRef}
                    style={{ flex: 1 }}
                    type={state.type}
                    flashMode={state.flash}
                    autoFocus={state.autoFocus}
                    zoom={state.zoom}
                    whiteBalance={state.whiteBalance}
                    focusDepth={state.depth}
                    useNativeZoom={true}
                    autoFocusPointOfInterest={state.focusCoords}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}>
                    <Box
                        mt={5}
                        style={{
                            flex: 0.5,
                            backgroundColor: "transparent",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}>
                        <TouchableOpacity
                            style={styles.flipIcon}
                            onPress={() => { goBack() }}>
                            <Icon active name='arrow-left' as={MaterialCommunityIcons} color={COLOR.light} size={'md'} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.flipIconCenter}
                            onPress={toggleFacing.bind(this)}>
                            <Icon name="ios-camera-reverse-outline" as={Ionicons} color={COLOR.light} size={'lg'} ></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.flipIconCenter}
                            onPress={toggleFlash.bind(this)} >
                            <Icon name="ios-flash" as={Ionicons} color={COLOR.light} size={'md'}></Icon>
                            <Text style={styles.flipText} fontSize={'sm'} >{state.flash} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.flipIconCenter}
                            onPress={toggleFocus.bind(this)}>
                            <Icon name="center-focus-strong" as={MaterialIcons} color={COLOR.light} size={'md'}></Icon>
                            <Text style={styles.flipText} fontSize={'sm'}>{state.autoFocus} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.flipIconCenter}
                            onPress={toggleWB.bind(this)}>
                            <Icon name="magic" as={FontAwesome} color={COLOR.light} size={'md'}></Icon>
                            <Text style={styles.flipText} fontSize={'sm'}>{state.whiteBalance} </Text>
                        </TouchableOpacity>
                    </Box>
                    <View
                        style={{
                            flex: 0.4,
                            backgroundColor: "transparent",
                            flexDirection: "row",
                            alignSelf: "flex-end"
                        }}>
                    </View>
                    <Box
                        safeAreaBottom
                        style={{
                            flex: 0.3,
                            backgroundColor: "transparent",
                            flexDirection: "row",
                            alignSelf: "center",
                        }}>
                        <TouchableOpacity
                            style={[styles.flipButton, { flex: 0.1, alignSelf: "flex-end" }]}
                            onPress={zoomIn.bind(this)}>
                            <Icon name="zoom-in" as={MaterialIcons} color={COLOR.light} size={'xl'}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonTakecamera, { flex: 0.3, alignSelf: "flex-end" }]} onPress={() => { onTakePicture() }}>
                            <Image source={require('../../assets/images/btn_takecamera.png')} style={styles.btnImg} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.flipButton, { flex: 0.1, alignSelf: "flex-end" }]}
                            onPress={zoomOut.bind(this)}>
                            <Icon name="zoom-out" as={MaterialIcons} color={COLOR.light} size={'xl'}></Icon>
                        </TouchableOpacity>
                    </Box>
                </RNCamera>
            </Box>
        )
    }

    return (
        <Box flex={1} >
            <StatusBar backgroundColor="#000000" animated barStyle='light-content' />
            <Box safeAreaTop bg={'black'} />
            {renderCamera()}
        </Box>
    )
}

export default Camera