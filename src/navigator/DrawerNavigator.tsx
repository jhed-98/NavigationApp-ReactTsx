import React from 'react'
  
import Icon from 'react-native-vector-icons/Ionicons'; 
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name='Ajustes Screen'
      component={SettingsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

//DrawerNavigation Menu Lateral Basico
export const DrawerNavigator = () => {

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
    drawerContent={(props) => <MenunInterno {...props} />} 
    >
      {/* <Drawer.Screen   name="StackNavigator" component={ StackNavigator } /> */}
      {/* <Drawer.Screen   name="Settings" component={SettingStackScreen} /> */}
      <Drawer.Screen   name="Tabs" component={ Tabs } />
      <Drawer.Screen   name="Settings" component={SettingsScreen} />
      {/* <Drawer.Screen  name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen  name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}

const MenunInterno = ( {navigation} : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte de avatar */}
      <View
      style={styles.containerAvatar}
      >
        <Image 
          source={{
            uri:'https://i1.sndcdn.com/avatars-sOfMEaR2lGA6dChj-nhGZ9w-t500x500.jpg'
          }}
          style={
            styles.avatar
          }
        />
      </View>

      {/* Opciones de menu */}

      <View
       style={styles.containerOptions}
       >

        <TouchableOpacity
          style={{
            ...styles.itemButtonOptions,
            flexDirection: 'row',
          }}
          onPress={ () => navigation.navigate('Tabs')}
        >

          <Icon name="compass-outline" size={30} color={colores.primary} />
          <Text style={styles.itemTitleOptions}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.itemButtonOptions,
            flexDirection: 'row',
          }}
          onPress={ () => navigation.navigate('Settings')}
        >
          
          <Icon name="settings-outline" size={30} color={colores.primary} />
          <Text style={styles.itemTitleOptions}>Ajuste</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}