import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Link href='/'>Go to home</Link>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
