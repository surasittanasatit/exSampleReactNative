import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

import NavigationController from './src/navigation';
import { AppContextProvider } from './src/context/appContext';

const App = () => {
  return (
      <NativeBaseProvider>
        <AppContextProvider>
          <NavigationController />
        </AppContextProvider>
      </NativeBaseProvider>
  )
}

export default App