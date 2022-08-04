import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Index'
import Login from '../Screens/Login/Index'


const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}
      initialRouteName="login">
        <Stack.Screen name="login" component={Login}  />
        <Stack.Screen name="home" component={Home}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;