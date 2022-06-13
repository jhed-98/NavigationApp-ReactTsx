import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

//Metodo 1 -> mas eficiente
// interface Props extends StackScreenProps<any,any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
   
    useEffect(() => {
        navigation.setOptions({
           headerLeft: () => (
                <Button
                title='Menú'
                onPress={ () => navigation.toggleDrawer()} />
           )
        });
       }, [])
    
  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.titleNav}> 
        Pagina1Screen
        </Text>

        <Pressable
            style={styles.buttonNav} 
            onPress={ () => navigation.navigate('Notifications')}>
            <Text style={styles.titleButtonNav}>Ir pagina 3</Text>
        </Pressable>

        <Text style={styles.titleNav}> 
            Navegar con argumentos
        </Text>

       <View
       style={{flexDirection:'row'}}>
        <TouchableOpacity
            style={{
                ...styles.buttonNavArg,
                backgroundColor: '#9933ff'
            }} 
            onPress={ () => navigation.navigate('Person', {
                id:1,
                nombre:'JhEd'
            })}
            >
                <Text style={styles.titleButtonNavArg}>Jhed</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={{
                ...styles.buttonNavArg,
                backgroundColor: '#00cc99'
            }} 
            onPress={ () => navigation.navigate('Person', {
                id:2,
                nombre:'Lisbeth'
            })}
            >
                <Text style={styles.titleButtonNavArg}>Lisbeth</Text>
            </TouchableOpacity>
       </View>
        {/* <Pressable
            style={styles.buttonNav} 
            onPress={ () => navigation.navigate('Person')}>
            <Text style={styles.titleButtonNav}>Ir persona</Text>
        </Pressable> */}
        {/* <Button
        title='Ir pagina 2'
        onPress={ () => navigation.navigate('Notifications')}
         /> */}
    </View>
  )
}
