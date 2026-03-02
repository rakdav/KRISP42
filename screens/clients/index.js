import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchField from './components/SearchFiled';
import ButtonAdd from './components/ButtonAdd';
import ClientItem from './components/ClientItem';

const defaultClients = [
    {
        name: 'Ivan Ivanov',
        city: 'Berlin',
        link: require('../../assets/face1.png'),
    },
    {
        name: 'Petr Ivanov',
        link: require('../../assets/face2.png'),
        city: 'Moscow',
    },
    {
        name: 'Sergey Ivanov',
        link: require('../../assets/face3.png'),
        city: 'Kaliningrad',
    },
];

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@clients', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@clients')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}


export default function Clients({ navigation, route }) {
    const [clients, setClients] = useState(defaultClients);
    const [filterClients, setFilteredClients] = useState(clients);
    const [filter, setFilter] = useState('');

    const loadClients = async () => {
        const storedClients = await getData();
        setClients(storedClients ?? []);
    }

    useEffect(() => {
        loadClients();
    }, []);

    useEffect(() => {
        if (route.params?.newClient) {
            const newClients = [...clients, route.params?.newClient];
            setClients(newClients);
            storeData(newClients);
            navigation.setParams({
                newClient: undefined,
            });
        }
    }, [route.params?.newClient, clients, navigation]);

    useEffect(() => {
        const clientsAfterFilter = clients.filter((client) =>
            client.city.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredClients(clientsAfterFilter);
    }, [filter, clients]);

    const onPressClient = (client) => {
        navigation.navigate('Profile', { client });
    };

    const renderItem = ({ item, index }) => {
        return <ClientItem client={item} onPress={onPressClient} />;
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#ecf0f1',
            }}>
            <Text
                style={{
                    fontSize: 34,
                    fontWeight: '700',
                    lineHeight: 51,
                    color: '#212322',
                    marginLeft: 30,
                    marginTop: 30,
                }}>
                Клиенты
            </Text>

            <SearchField filter={filter} setFilter={setFilter} />

            <View style={styles.container}>
                <FlatList
                    data={filterClients}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name + item.city}
                />
            </View>
            <ButtonAdd
                text="Добавить нового"
                onPress={() => navigation.navigate('Adding')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection: 'row',
        borderRadius: 16,
        resizeMode: 'contain',
    },
});
