import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Adding from "./screens/addInd";
import Profile from "./screens/profile";
import Clients from "./screens/clients";

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
          initialRouteName="Clients"
          screenOptions={{ headerShown: false }} id="RootStack">
        <Stack.Screen
            name="Clients"
            component={Clients}
        />
        <Stack.Screen name="Adding" component={Adding} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}
