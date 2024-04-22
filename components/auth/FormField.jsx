import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { icons } from '../../constants';

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyle,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={tw`space-y-2 ${otherStyle}`}>
      <Text style={tw`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View
        style={tw`w-full h-16 border-2 border-blue-900 rounded-2xl px-4 bg-black-100 focus:border-secondary-100 items-center flex-row`}
      >
        <TextInput
          style={tw`flex-1 w-full h-full text-white font-psemibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode='contain'
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
