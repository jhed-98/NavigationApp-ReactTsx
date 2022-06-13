import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigatorMLB } from './src/navigator/DrawerNavigatorMLB';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { Tabs } from './src/navigator/Tabs';


const App = () => {
  return (
    <NavigationContainer>
    {/* <StackNavigator />  */}
    <DrawerNavigator /> 
     {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App 