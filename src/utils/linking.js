import { Linking, Platform } from 'react-native'
import UrlParse from 'url-parse'

import { navigate, getIsAppReady } from '@navigation'

export const getRoute = async (url) => {
  let routeData = {
    routeName: '',
    params: {}
  }

  if (url) {
    const { pathname, query } = new UrlParse(url, true)
    if (url.indexOf('/password/reset') !== -1) {
      routeData = {}
      routeData.routeName = 'UserPasswordReset'
      routeData.params = { pathname, query }
    }
  }

  return routeData
}

export const initiate = async () => {
  const url = await Linking.getInitialURL()
  const routeData = await getRoute(url)

  Linking.addEventListener('url', handleOpenURL)

  return routeData
}

export const terminate = async () => {
  Linking.removeEventListener('url', handleOpenURL)
}

const handleOpenURL = async ({ url }) => {
  const { routeName, params } = await getRoute(url)
  if (routeName) {
    if (getIsAppReady()) {
      navigate(routeName, params)
    }
  }
}

export const openPhone = (phone) => {
  if (phone) {
    let phoneNumber = ''

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phone}`
    } else {
      phoneNumber = `telprompt:${phone}`
    }
    Linking.openURL(phoneNumber)
  }
}

export const openEmail = (email) => {
  if (email) {
    const url = `mailto:${email}`
    Linking.openURL(url)
  }
}
