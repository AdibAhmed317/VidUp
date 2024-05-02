import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { icons } from '../../constants';

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={tw`w-full h-16 border-2 border-blue-900 rounded-2xl px-4 bg-black-100 focus:border-secondary-100 items-center flex-row`}
    >
      <TextInput
        style={tw`flex-1 w-full mt-0.5 text-white font-pregular text-base`}
        value={value}
        placeholder='Search for a video topic.'
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} style={tw`w-5 h-5`} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
