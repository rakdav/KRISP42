import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function ButtonAdd({text,onPress}) {
    return (
        <TouchableOpacity style={[styles.button,styles.buttonText]} onPress={onPress}>
            <Text style={[styles.buttonText,{color:'#FFFFFF'}]}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonText: {
        fontSize: 14,
        fontWeight: '800',
        lineHeight:19,
        alignSelf:'center'
    },
    button:{
        backgroundColor:'#F87360',
        marginTop:5,
        padding:15,
        marginBottom:30,
        width:SCREEN_WIDTH-30,
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'center'
    },
})