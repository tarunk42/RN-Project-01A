import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TextBasicStyle from '../components/TextBasicStyle';



export default function ProfileScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <TextBasicStyle>Profile Screen</TextBasicStyle>
            <TextBasicStyle>Height: {Dimensions.get('window').height}</TextBasicStyle>
            <TextBasicStyle>Width: {Dimensions.get('window').width}</TextBasicStyle>
        </View>
    );
};

const styles = StyleSheet.create({});
