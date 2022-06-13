import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab3Screen = () => {
    
    useEffect(() => {
        console.log('tab 3 screen');
         }, [])
         
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.titleNav}> 
        Pagina1Screen
        </Text>
    </View>
  )
}
