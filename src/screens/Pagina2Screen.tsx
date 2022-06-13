import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View, Button, Pressable } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    //Metodo 2
    const navigation = useNavigation();

    useEffect(() => {
     navigation.setOptions({
        title: 'Pagina 2',
        headerBackTitle:'Atras'
     });
    }, [])
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.titleNav}> 
        Pagina2Screen
        </Text>

        <Pressable 
            style={styles.buttonNav} 
            onPress={ () => navigation.navigate('Profile')}>
            <Text style={styles.titleButtonNav}>Ir pagina 3</Text>
        </Pressable>

        {/* <Button
        title='Ir pagina 3'
        onPress={ () => navigation.navigate('Profile')}
         />  */}
    </View>
  )
}
