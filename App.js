import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileS from './screens/profile';
import AddingS from './screens/addInd';
import ClientsS from './screens/clients';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator
          initialRouteName="Clients"
          screenOptions={{ headerShown: false }} id="RootStack">
        <Stack.Screen
            name="Clients"
            component={ClientsS}
        />
        <Stack.Screen name="Adding" component={AddingS} />
        <Stack.Screen name="Profile" component={ProfileS} />
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
