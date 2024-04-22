import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';
import tw from '../lib/tailwind';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-950`}>
      <StatusBar style='auto' />
      <Text style={tw`text-5xl text-white font-pextrabold`}>VidUp</Text>
      <Link href='/profile' style={tw`text-blue-400 p-5 text-xl`}>
        Go to Profile
      </Link>
    </View>
  );
}
