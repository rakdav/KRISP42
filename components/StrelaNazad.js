import React from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';


export default function StrelaNazad({navigation}) {
    return (

        <View
            style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                marginTop: 30,
                marginLeft: 30,
            }}>
            <TouchableOpacity  onPress={

                ()=> navigation.goBack()
            } >
                <Image
                    style={{ alignSelf: 'flex-start' }}
                    source={require('../assets/left.png')}></Image>
            </TouchableOpacity>

        </View>
    );
}






