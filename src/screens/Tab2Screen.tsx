import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {

    useEffect(() => {
   console.log('tab 2 screen');
    }, [])
    
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.titleNav}> 
        Pagina1Screen
        </Text>
    </View>
  )
}
