import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number;
//     nombre: string;
// }

//Forma sucia para pasar parametros
// interface Props extends StackScreenProps<any, any>{};
interface Props extends StackScreenProps<RouteStackParams, 'Person'>{};

export const PersonaScreen = ({route,navigation}: Props) => {

    // console.log( JSON.stringify(props,null,1));
    const params = route.params;
    // const params = route.params as RouteParams;

    useEffect(() => {
        navigation.setOptions({
        //    title: params!.nombre,
           title: params.nombre,
           headerBackTitle:'Atras'
        });
       }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.titleNav}> 
            {
                JSON.stringify(params,null,3)
            }
        </Text>
    </View>
  )
}
