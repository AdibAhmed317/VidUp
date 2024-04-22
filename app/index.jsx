import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';
import tw from '../lib/tailwind';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={tw`h-full w-full justify-start items-center px-4`}>
          <Image
            source={images.logo}
            style={tw`w-[130px] h-[100px]`}
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            style={tw`max-w-[380px] w-full h-[300px]`}
            resizeMode='contain'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
