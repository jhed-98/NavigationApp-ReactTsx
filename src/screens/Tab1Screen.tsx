import React, { useEffect } from 'react'

import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome5'; 

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';


export const Tab1Screen = () => {

    useEffect(() => {
   console.log('tab 1 screen');
    }, [])
    
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.titleNav}> 
        Pagina1Screen 
        </Text>

        <Text style={styles.titleNav}>       
          <Icon name="people-outline" size={30} color={colores.primary} />;
          <Icon name="images-outline" size={30} color={colores.primary} />;
          <Icon name="camera-outline" size={30} color={colores.primary} />;
          {/* <FontAwesomeIcon name="ellipsis-h" size={30} color={colores.primary} />; */}
        </Text>
    </View>
  )
}
