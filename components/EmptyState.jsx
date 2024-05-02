import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View style={tw`justify-center items-center px-4`}>
      <Image
        source={images.empty}
        style={tw`w-[270px] h-[215px]`}
        resizeMode='contain'
      />
      <Text style={tw`text-xl font-psemibold text-white`}>{title}</Text>
      <Text style={tw`font-pmedium text-sm text-gray-100`}>{subtitle}</Text>

      <CustomButton
        title='Create Video'
        handlePress={() => router.push('/create')}
        containerStyles='w-full my-5'
      />
    </View>
  );
};

export default EmptyState;
