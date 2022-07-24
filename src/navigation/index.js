import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Components */
import Onboarding from '../expense__tracker/Onboarding/Onboarding';
import Transactions from '../expense__tracker/Transactions/Transactions';
import Add from '../expense__tracker/Transactions/Add';

const assets = [];
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer headerMode="none" independent={true}>
       <Stack.Navigator >
         <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding}/>
         <Stack.Screen options={{ headerShown: false }} name="Transactions" component={Transactions}/>
         <Stack.Screen options={{ headerShown: false }} name="AddTransactions" component={Add}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

/* */