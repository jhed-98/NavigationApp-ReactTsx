import React, { useEffect } from 'react'

import Icon from 'react-native-vector-icons/Ionicons'; 
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles, colores } from '../theme/appTheme';

//Metodo 1 -> mas eficiente
// interface Props extends StackScreenProps<any,any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
   
    useEffect(() => {
        navigation.setOptions({
           headerLeft: () => (
                // <Button
                // title='Menús'
                // onPress={ () => navigation.toggleDrawer()} />
                <TouchableOpacity
                style={{ 
                    marginLeft: 10,
                    backgroundColor: '#ffffff'
                }}
                onPress={ () => navigation.toggleDrawer()} >
                    <Icon name="menu-outline" size={35} color={colores.primary} />
                </TouchableOpacity>
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
                backgroundColor: '#9933ff',
                flexDirection: 'row'
            }} 
            onPress={ () => navigation.navigate('Person', {
                id:1,
                nombre:'JhEd'
            })}
            >
                <Icon name="body-outline" size={20} color="#ffffff"/>
                <Text style={{...styles.titleButtonNavArg, marginLeft:5}}>Jhed</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={{
                ...styles.buttonNavArg,
                backgroundColor: '#00cc99',
                flexDirection: 'row'
            }} 
            onPress={ () => navigation.navigate('Person', {
                id:2,
                nombre:'Lisbeth'
            })}
            >
                <Icon name="body-outline" size={20} color="#ffffff"/>
                <Text style={{...styles.titleButtonNavArg, marginLeft:5}}>Lisbeth</Text>
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
