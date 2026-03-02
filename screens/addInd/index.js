import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from "./components/InputField";
import ButtonAdd from "./components/ButtonAdd";
import StrelaNazad from "../../components/StrelaNazad";
export default function Adding({navigation}) {
    const [statePhoto, setPhoto] = React.useState('')
    const [stateFIO, setFIO] = React.useState('')
    const [statePhone, setPhone] = React.useState('')
    const [stateCity, setCity] = React.useState('')
    const [stateHobby, setHobby] = React.useState('')
    const [stateCount,setCount] = React.useState(0)
    const  onAddClient=()=>{
        const client={name:stateFIO,city:stateCity};
        navigation.navigate('Clients',{newClient:client});
    };
    return (
        <SafeAreaView style={{flex:1}}>
            <StrelaNazad navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.addNew}>Добавить нового</Text>
                <InputField
                    title="Фото"
                    placeholder="Вставьте ссылку на фото"
                    onChangeText={setPhoto}
                    text={statePhoto}/>
                <InputField
                    title="ФИО"
                    placeholder="Введите фамилию и имя"
                    onChangeText={setFIO}
                    text={stateFIO}/>
                <InputField
                    title="Номер телефона"
                    placeholder="+7(000) 000 00 00"
                    onChangeText={setPhone}
                    text={statePhone}/>
                <InputField
                    title="Город"
                    placeholder="Выберите город"
                    onChangeText={setCity}
                    text={stateCity}/>
                <InputField
                    title="Био"
                    placeholder="Укажите хобби, интересы, образование и стаж работы"
                    onChangeText={setHobby}
                    text={stateHobby}/>
                <ButtonAdd
                    text={'Добавить ('+setCount(+')')}
                    stateCount={stateCount}
                    setCount={setCount}
                    onPress={onAddClient}
                    />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:
        {flex: 1,
        justifyContent:'flex-start',
        backgroundColor:'#EDF0F3',
        padding:5,
        resizeMode:'contain'},
    addNew:{
        fontSize:10,
        fontWeight:'100',
        lineHeight:19,
        color:'#212322',
        marginTop:58,
        alignSelf:'center',
    },
});