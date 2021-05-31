import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{justifyContent: 'center', flex: 1, margin:20}}>
            <Text>HomeScreen</Text>
            <Button title="Got to Bottom Navigator Page" onPress={() => navigation.navigate('BTabNScreen')}/>
            <Button title="Got to Drawer Navigator Page" onPress={() => navigation.navigate('DrawerScreen')}/>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
