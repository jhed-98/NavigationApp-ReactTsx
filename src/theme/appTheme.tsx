import React from 'react'
import { StyleSheet } from 'react-native'


export const colores = {
    primary: '#5b56d6',
    white: '#ffffff'
  }

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
        marginVertical:10
    },
    buttonNav:{
        backgroundColor: '#000',
        paddingHorizontal:10,
        paddingVertical:10, 
        marginVertical:10,
        borderRadius:100
    },
    titleButtonNav:{
        color: '#fff',
        textAlign: 'center'
    },
    titleNav:{
        color: '#000',
        textAlign: 'center',
        fontSize:30,
        marginVertical:10,
    },
    buttonNavArg:{
        width:100,
        height:100,
        backgroundColor: '#ff3300',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginRight:5,
    },
    titleButtonNavArg:{
        color: '#fff',
        textAlign: 'center',
        fontSize:18,
        marginVertical:10,
        fontWeight:'bold'
    },
    avatar:{
        width:150,
        height:150,
        borderRadius: 100
    },
    containerAvatar:{
        alignItems:'center',
        marginTop:20
    },
    containerOptions:{
        marginVertical:20,
        marginHorizontal:20
    },
    itemButtonOptions:{
        marginVertical:10,
    },
    itemTitleOptions:{
        fontSize:20
    }
})
