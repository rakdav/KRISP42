import React from 'react';
import {Text, StyleSheet, Dimensions, View, TextInput} from 'react-native';
const SCREEN_WIDTH=Dimensions.get('window').width;

export default function InputField(props){
    console.log(props.text);
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{props.text}</Text>
          <TextInput style={styles.textInp}
          placeholder={props.placeholder}
          value={props.value}
          multiline={props.multiline}
          numberOfLines={2}
          onChangeText={props.onChangeText}/>
      </View>
    );
}

const styles=StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'500',
        lineHeight:19,
        marginTop:2.5,
        marginLeft:16,
        alignSelf:'flex-start',
    },
    textInp:{
        width:SCREEN_WIDTH-30,
        top:20,
        borderRadius:16,
        margin:12,
        borderWidth:0,
        paddingTop:13,
        paddingBottom:13,
        paddingLeft:16,
        lineHeight:24,
        gap:30,
        backgroundColor:'#F7F7F7',
        color:'#A3A3A3',
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Poppins'
    }
})