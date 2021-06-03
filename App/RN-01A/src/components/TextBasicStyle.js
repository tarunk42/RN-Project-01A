import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextBasicStyle = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{children}</Text>
        </View>
    );
};

export default TextBasicStyle;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textContainer: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
