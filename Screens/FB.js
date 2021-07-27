import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FB extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24}} >FACEBOOK</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        padding: 8,
      }
  });
