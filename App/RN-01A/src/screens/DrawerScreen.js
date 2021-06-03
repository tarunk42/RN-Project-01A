import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerScreen({ navigation }) {
    return (
        <Drawer.Navigator
            initialRouteName="Profile"
            backBehavior="order"
            drawerType="front"
            drawerPosition="right"
            openByDefault
            edgeWidth={300}
        >
            <Drawer.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    drawerIcon: () => (<Ionicons name="person" size={24} color="black" />),
                }}
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingScreen}
                options={{
                    drawerIcon: () => (<Ionicons name="settings" size={24} color="black" />),
                }}
            />
        </Drawer.Navigator>
    );
};

