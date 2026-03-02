import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
const SCREEN_WIDTH=Dimensions.get('window').width;
export default function ButtonAdd(props){
    const openChat=()=>{
        props.setCount(props.setCount+1);
    };
    return(
        <TouchableOpacity
            style=
                {
                [styles.button,styles.buttonText,
                    {
                        backgroundColor: '#F87360',
                        marginTop:15,
                        width:SCREEN_WIDTH-30,
                        flexDirection: 'row',
                        alignItems: 'center',
                    },
                ]
            }
            onPress={()=>{
                props.setCount(props.setCount+1);
                props.onPress();
            }}>
            <Text style={[styles.buttonText,
                {color:'#FFFFFF'}]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:14,
        fontWeight:'800',
        lineHeight:19,
        alignSelf:'center',
    },
    button:{
        width:160,
        margin:3,
        borderRadius:12,
        backgroundColor:'#F87360',
        borderWidth:1,
        padding:15
    }
})