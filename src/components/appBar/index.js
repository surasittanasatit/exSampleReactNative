import React, { useState, useEffect } from 'react'
import { StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { View, Text, Box, HStack, Icon, Badge, VStack } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { navigate, goBack } from '../../utils/navigation'
import { FAMILY, COLOR, SIZE } from '../../theme/typography'
import styles from './styles'

const renderAppbarStyle0 = (props) => {
    return (
        <HStack flex={1} alignItems={'center'} pl={2} pr={2} justifyContent={'space-between'} >
            <HStack alignItems={'center'} p={1} >
                <View style={styles.actionBarLeft} flex={4} >
                    <TouchableOpacity activeOpacity={0.9} onPress={props.onClickBack} >
                        <HStack alignItems={'center'} >
                            <Icon as={<Ionicons name='ios-chevron-back-outline' />} color={'#FFFF'} size={'xl'} />
                            <Text color={'#FFFF'} fontWeight={'400'} fontSize={'md'} >{props.textBack}</Text>
                        </HStack>
                    </TouchableOpacity>
                </View>
                <View style={styles.actionBarCenter} flex={4}  >
                    <Text color={'#FFFF'} fontWeight={'400'} fontSize={'lg'} >{props.textTitle}</Text>
                </View>
                <View style={styles.actionBarRight} flex={4}  >

                </View>
            </HStack>
        </HStack>
    );
}

const renderAppbarStyle1 = (props) => {
    return (
        <HStack flex={1} bg={COLOR.primary} alignItems={'center'} pl={2} pr={2} justifyContent={'space-between'} >
            <HStack alignItems={'center'} p={1} >
                <View style={styles.actionBarLeft} flex={4} >

                </View>
                <View style={styles.actionBarCenter} flex={4}  >
                    <Text color={'#FFFF'} fontWeight={'400'} fontSize={'lg'} >{props.textTitle}</Text>
                </View>
                <View style={styles.actionBarRight} flex={4}  >
                    <TouchableOpacity activeOpacity={0.9} onPress={props.onClickLogout} >
                        <HStack alignItems={'center'} >
                            <Icon as={<Feather/>} name='log-out' color={'#FFFF'} size={'md'} />
                        </HStack>
                    </TouchableOpacity>
                </View>
            </HStack>
        </HStack>
    );
}

const Appbar = (props) => {
    return (
        <View style={props.isStyleTransparent == true ? styles.appBarTransparent : styles.appBar} >
            {
                props.isStyleAppBar == 0 ? renderAppbarStyle0(props)
                    : props.isStyleAppBar == 1 ? renderAppbarStyle1(props)
                        : <></>
            }
        </View>
    )
}

export default Appbar