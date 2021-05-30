import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function BTabNScreen({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', margin: 10}}>
            <Text>Just here for nothing doing nothing.</Text>
            <Button title="Go On" onPress={() => navigation.navigate('BTNScreen')}/>
        </View>
    
    );
};

export default BTabNScreen;

const styles = StyleSheet.create({});
