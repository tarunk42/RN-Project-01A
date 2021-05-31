import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

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
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Settings" component={SettingScreen}/>
        </Drawer.Navigator>
    );
};

