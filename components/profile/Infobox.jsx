import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const Infobox = ({ title, subtitle, containerStyle, titleStyle }) => {
  return (
    <View style={tw`${containerStyle} items-center justify-center`}>
      <Text style={tw`${titleStyle} text-white text-center font-psemibold`}>
        {title}
      </Text>
      <Text
        style={tw`${titleStyle} text-gray-100 text-center font-pregular text-sm`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default Infobox;
