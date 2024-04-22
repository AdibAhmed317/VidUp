import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import tw from '../../lib/tailwind';

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Link href='/' style={tw`text-blue-400 p-5 text-xl`}>
        Go to home
      </Link>
    </View>
  );
};

export default profile;
