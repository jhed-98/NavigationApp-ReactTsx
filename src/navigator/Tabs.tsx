import React from 'react'
 
import Icon from 'react-native-vector-icons/Ionicons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}

const ButtonTabIOS = createBottomTabNavigator();
const ButtonTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <ButtonTabAndroid.Navigator
    sceneAnimationEnabled= {true}
    barStyle={{
      backgroundColor: colores.primary,
    }}
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'people-outline'
              break;
            case 'Tab2Screen':
              iconName = 'apps-outline'
              break;
            case 'StackNavigator':
              iconName = 'bookmark-outline'
              break;
          }
          // return <Text style={{color}}>{iconName}</Text>
          return <Icon name={iconName} size={22} color={color} />
        }
      }) 
    }
    >
      <ButtonTabAndroid.Screen options={{title : ''}} name="Tab1Screen" component={Tab1Screen} />
      <ButtonTabAndroid.Screen options={{title : ''}} name="Tab2Screen" component={TopTabNavigator} />
      <ButtonTabAndroid.Screen options={{title : ''}} name="StackNavigator" component={StackNavigator} />
    </ButtonTabAndroid.Navigator>
  );
}

export const TabsIOS = () => {
  return (
    <ButtonTabIOS.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = '';

        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'people-outline'
            break;
          case 'Tab2Screen':
            iconName = 'apps-outline'
            break;
          case 'StackNavigator':
            iconName = 'bookmark-outline'
            break;
        }
        // return <Text style={{color}}>{iconName}</Text>
        return <Icon name="people-outline" size={22} color={color} />
      },
      headerShown: false,
      tabBarActiveTintColor: colores.primary,    
      tabBarStyle: {
        borderTopColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle:{
        fontSize: 10
      },
     }) 
    }
     sceneContainerStyle={{
       backgroundColor: colores.white,
     }}

    >
      {/* <Tab.Screen options={{title : '', tabBarIcon: (props)=> <Text style={{color:props.color}}>T1</Text> }} name="Tab1Screen" component={Tab1Screen} /> */}
      <ButtonTabIOS.Screen options={{title : ''}} name="Tab1Screen" component={Tab1Screen} />
      <ButtonTabIOS.Screen options={{title : ''}} name="Tab2Screen" component={TopTabNavigator} />
      <ButtonTabIOS.Screen options={{title : ''}} name="StackNavigator" component={StackNavigator} />
    </ButtonTabIOS.Navigator>
  );
}