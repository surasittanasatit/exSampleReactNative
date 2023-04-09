import * as React from 'react'
import { CommonActions, DrawerActions, StackActions } from '@react-navigation/native'

export const navigationRef = React.createRef()

export const navigate = (routeName, params = []) => {
  let args = []
  args = [routeName, params];
  let action = StackActions.push(...args)
  navigationRef.current?.dispatch(action)
}

export const navigateReset = (routeName, params = []) => {
  let args = []
  args = [{ name: routeName, params }];

  navigationRef.current?.dispatch(state => {
    const routes = state.routes.filter(r => r.name !== 'LoginScreen');
    return CommonActions.reset({
      routes: args,
      index: 1,
    });
  });
}

export const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer())
}

export const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}

export const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
}

export const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack())
}