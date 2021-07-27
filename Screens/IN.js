import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class INSTA extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24}} >INSTAGRAM</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 8,
        fontSize: 20,
      }
  });