import React from 'react'
  
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

//DrawerNavigation Menu Lateral Basico
export const DrawerNavigatorMLB = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
        // drawerPosition:"right"
        headerShown: false,
        // drawerType:'front'
        // drawerType:'permanent'
        drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen options={{title:"Stack Navigator"}} name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen options={{title:"Ajustes"}} name="Settings" component={SettingsScreen} />
      {/* <Drawer.Screen  name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen  name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}