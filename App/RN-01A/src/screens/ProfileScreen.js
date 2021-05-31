import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function ProfileScreen() {
    return (
        <View>
            <Text>Profile Screen  {Dimensions.get('window').width}  {Dimensions.get('window').height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
