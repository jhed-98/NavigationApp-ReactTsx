import React, { useEffect } from 'react'
import { Text, View, Button, Pressable } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}:Props) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //        title: 'Pagina 3',
    //        headerBackTitle:'Atras'
    //     });
    //    }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.titleNav}>
        Pagina3Screen
        </Text>

        <Pressable 
            style={styles.buttonNav} 
            onPress={ () => navigation.pop()}>
            <Text style={styles.titleButtonNav}>Regresar</Text>
        </Pressable>

        <Pressable 
            style={styles.buttonNav} 
            onPress={ () => navigation.popToTop()}>
            <Text style={styles.titleButtonNav}>Ir al Pagina 1</Text>
        </Pressable>

         {/* <Button
         title='Ir al Pagina 1'
         onPress={ () => navigation.popToTop()}
          />  */}
    </View>
  )
}
