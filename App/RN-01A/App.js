import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BTabNScreen from './src/screens/BTabNScreen';
import DrawerScreen from './src/screens/DrawerScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BTabNScreen" component={BTabNScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};