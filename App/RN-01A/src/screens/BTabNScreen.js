import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BTNScreenOne from './BTNScreenOne';
import BTNScreenTwo from './BTNScreenTwo';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BTabNScreen() {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="One" 
        component={BTNScreenOne}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (<Entypo name="home" size={24} color="black" />),
        }}
      />
      <Tab.Screen 
        name="Two" 
        component={BTNScreenTwo}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (<FontAwesome name="search" size={24} color="black" />),
        }}
      />
    </Tab.Navigator>
  );
};


