import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={tw`items-center justify-center gap-2`}>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={tw`w-6 h-6`}
      />
      <Text
        style={tw`${
          focused ? 'font-semibold' : 'font-pregular'
        } text-xs text-[${color}] text-center`}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
