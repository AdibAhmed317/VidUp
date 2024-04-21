import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text style={styles.text}>app</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
