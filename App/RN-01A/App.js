import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BTabNScreen from './src/screens/BTabNScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BTNScreenOne from './src/screens/BTNScreenOne';
import BTNScreenTwo from './src/screens/BTNScreenTwo';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="One" component={BTNScreenOne}/>
      <Tab.Screen name="Two" component={BTNScreenTwo}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BTabNScreen" component={BTabNScreen} />
        <Stack.Screen name="BTNScreen" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};