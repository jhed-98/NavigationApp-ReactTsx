import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RouteStackParams = {
    Home: undefined,
    Notifications: undefined,
    Profile: undefined,
    Person: {id: number, nombre: string},
}

const Stack = createStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        //Inicializa la ruta definida
        // initialRouteName='Home'
        //Personalizar el tolbar
        screenOptions={{
            // headerShown:false,
            headerStyle:{
                elevation:0,
                shadowColor:'transparent'
            },
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
        >
          <Stack.Screen options={{title:"Home"}} name="Home" component={Pagina1Screen} />
          <Stack.Screen options={{title:"Notificationes"}} name="Notifications" component={Pagina2Screen} />
          <Stack.Screen options={{title:"Perfil"}} name="Profile" component={Pagina3Screen} /> 
          <Stack.Screen options={{title:"Persona"}} name="Person" component={PersonaScreen} /> 
        </Stack.Navigator>
      );
}
