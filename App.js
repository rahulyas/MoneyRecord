import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation';
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import store from "./store";
import { LoadAssets, theme } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
/* Components */
import Onboarding from './src/expense__tracker/Onboarding/Onboarding';
import Transactions from './src/expense__tracker/Transactions/Transactions';
import Add from './src/expense__tracker/Transactions/Add';
const fonts = {
  SFBOLD: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFREGULAR: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFSEMI: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  RBlack: require("./assets/fonts/Rubik/Rubik-Black.ttf"),
  RRegular: require("./assets/fonts/Rubik/Rubik-Regular.ttf"),
  RMedium: require("./assets/fonts/Rubik/Rubik-Medium.ttf"),
};


const App = () => {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <Navigation/>
          </LoadAssets>
      </ThemeProvider>
    </Provider>
  )
}

export default App