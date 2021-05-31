import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BTNScreenOne from './BTNScreenOne';
import BTNScreenTwo from './BTNScreenTwo';


const Tab = createBottomTabNavigator();

export default function BTabNScreen() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="One" component={BTNScreenOne}/>
      <Tab.Screen name="Two" component={BTNScreenTwo}/>
    </Tab.Navigator>
  );
};


