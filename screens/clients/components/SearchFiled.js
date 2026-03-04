import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
export default function SearchFiled({filter,setFilter}){
    return (
        <View style={styles.search}>
            <Image style={{margin:20,marginRight:10,alignSelf:'center'}}
            source={require('../../../assets/icon1.png')}/>
            <TextInput
                style={styles.textInp}
                placeholder="Поиск"
                value={filter}
                onChangeText={(text) => {
                    setFilter(text);
                }}></TextInput>
        </View>
    )
}
const styles=StyleSheet.create({
    textInp:{
        fontSize:16,
        fontWeight:'400',
        height:50,
        fontFamily:'Poppins ',
        justifyContent:'center',
    },
    search:{
        flexDirection:'row',
        margin:12,
        padding:0,
        backgroundColor:'#F7F7F7'
    }
})