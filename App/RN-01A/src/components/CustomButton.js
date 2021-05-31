import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';

const CustomButton = ({ title, ButtonHieght, ButtonWidth, ButtonColor, TextColor, adjustText, onPress }) => {
    if(!title){
        title = "Add Title!"
    };
    if(!ButtonHieght){
        ButtonHieght = 40
    };
    if(!ButtonWidth){
        ButtonWidth = 312
    };
    if(!ButtonColor){
        ButtonColor = "#66f"
    };
    if(!TextColor){
        TextColor = "#fff"
    };
    if(!adjustText){
        adjustText = 30
    };
    if(!onPress){
        onPress= () => Alert.alert("Input Error", "Add functionality to the element.")
    }
        

    return (
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={onPress}>
            <View 
                style={{
                    height: ButtonHieght,
                    width: ButtonWidth,
                    backgroundColor: ButtonColor,
                    borderRadius: 5,
                    margin: 10,
                    alignItems: 'center'
            
                    }} 
            >
                <Text style={{ color: TextColor , justifyContent: 'center', top: `${adjustText}%` }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default CustomButton;
