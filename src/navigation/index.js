import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { navigationRef } from '../utils/navigation'

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';

const Stack = createStackNavigator();
const options = {
    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    gestureEnabled: false,
};


const NavigationController = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={options} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationController