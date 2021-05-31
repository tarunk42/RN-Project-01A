import React from 'react';
import { Button, Alert, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={{justifyContent: 'center', flex: 1, margin:20, padding: 10}}>
            <Text style={{margin: 10}}>HomeScreen</Text>
            <View style={{margin: 10}}>
                <CustomButton  title="Got to Bottom Navigator Page" onPress={() => navigation.navigate('BTabNScreen')}/>
            </View>
            <View style={{margin: 10,}}>
                <CustomButton title="Got to Drawer Navigator Page" onPress={() => navigation.navigate('DrawerScreen')}/>
            </View>
            <CustomButton
                title="Hello"
                onPress={() => Alert.alert("Title", "Message")}
            />
        </View>
    );
};

export default HomeScreen;


