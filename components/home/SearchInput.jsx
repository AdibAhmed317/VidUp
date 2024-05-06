import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import { icons } from '../../constants';
import { router, usePathname } from 'expo-router';

const SearchInput = ({ initalQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initalQuery || '');

  return (
    <View
      style={tw`w-full h-16 border-2 border-blue-900 rounded-2xl px-4 bg-black-100 focus:border-secondary-100 items-center flex-row`}
    >
      <TextInput
        style={tw`flex-1 w-full mt-0.5 text-white font-pregular text-base`}
        value={query}
        placeholder='Search for a video topic.'
        placeholderTextColor='#CDCDE0'
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        style={tw`p-3 justify-center items-center`}
        onPress={() => {
          if (!query) {
            return Alert.alert('Missing Query', 'Please input something.');
          }

          if (pathname.startsWith('/search')) {
            router.setParams({ query });
          } else {
            router.push(`search/${query}`);
          }
        }}
      >
        <Image source={icons.search} style={tw`w-5 h-5`} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
