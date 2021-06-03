import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TextBasicStyle from '../components/TextBasicStyle';

const DATA = [
    {
        id: "0",
        title: "Display",
    },
    {
        id: "1",
        title: "Audio",
    },
    {
        id: "2",
        title: "Map",
    },
    {
        id: "3",
        title: "Edit",
    },
    {
        id: "4",
        title: "Saved",
    },
    {
        id: "5",
        title: "Accessibility",
    },
    {
        id: "6",
        title: "Policy",
    },
    {
        id: "7",
        title: "About Us",
    },
    {
        id: "8",
        title: "Factory Reset",
    },
];

export default function SettingScreen() {
    return (
        <View>
            <TextBasicStyle>Settings Screen</TextBasicStyle>
            <View style={{height: 200, marginTop: 30}}>
                <FlatList
                data = {DATA}
                renderItem={({item}) => (
                    <View style={{justifyContent: 'center', alignItems: 'center', borderTopColor: "#000", borderTopWidth: 0.7}}>
                        <Text style={{ fontSize: 20, marginTop: 10}}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});
