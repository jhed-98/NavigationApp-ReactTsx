import React from 'react'
 
import Icon from 'react-native-vector-icons/Ionicons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top:paddingTop} = useSafeAreaInsets()


  return (
    <Tab.Navigator
        style={{
            paddingTop
        }}
        sceneContainerStyle ={{
            backgroundColor: 'white'
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
            let iconName: string = '';
    
            switch (route.name) {
                case 'Chat':
                iconName = 'chatbubble-outline'
                break;
                case 'Contacts':
                iconName = 'people-outline'
                break;
                case 'Albums':
                iconName = 'images-outline'
                break;
            }
            // return <Text style={{color}}>{iconName}</Text>
            return <Icon name={iconName} size={25} color={color} />
            },
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                borderTopColor: 'white',
                borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0, 
            },              
            }) 
        }
    >
      <Tab.Screen options={{title : ''}} name="Chat" component={ChatScreen} />
      <Tab.Screen options={{title : ''}} name="Contacts" component={ContactsScreen} />
      <Tab.Screen options={{title : ''}} name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}