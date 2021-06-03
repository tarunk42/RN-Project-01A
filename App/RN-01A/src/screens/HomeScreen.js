import React from 'react';
import { Button, Alert, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import TextBasicStyle from '../components/TextBasicStyle';
import { Entypo } from '@expo/vector-icons';



const HomeScreen = ({ navigation }) => {
    return (
        <View style={{justifyContent: 'center', flex: 1, margin:20, padding: 10}}>
            <Entypo style={{alignSelf: 'center', padding: 30}} name="home" size={100} color="black" />
            <TextBasicStyle>Home Screen</TextBasicStyle>
            <CustomButton  title="Got to Bottom Navigator Page" onPress={() => navigation.navigate('BTabNScreen')}/>
            <CustomButton title="Got to Drawer Navigator Page" onPress={() => navigation.navigate('Drawer Screen')}/>
            <CustomButton
                title="Hello"
                onPress={() => Alert.alert("Title", "Message")}
            />
        </View>
    );
};

export default HomeScreen;


