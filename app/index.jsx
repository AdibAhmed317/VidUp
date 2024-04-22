import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Redirect, router } from 'expo-router';
import tw from '../lib/tailwind';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={tw`min-h-[680px] w-full justify-center items-center px-4`}>
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
          <View style={tw`relative mt-5`}>
            <Text style={tw`text-3xl text-white font-bold text-center`}>
              Elevate Your Viewing Experience with
              <Text style={tw`text-secondary-100`}> VidUp.</Text>
            </Text>
            <Image
              style={tw`w-[136px] h-[15px] -bottom-4 -right-8 absolute`}
              source={images.path}
              resizeMode='contain'
            />
          </View>
          <Text
            style={tw`text-sm font-pregular text-gray-100 mt-7 text-center`}
          >
            Watch More, Share More, Enjoy More with VidUp.
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={() => {
              router.push('/sign-in');
            }}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
