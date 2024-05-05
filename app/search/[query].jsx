import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import tw from '../../lib/tailwind';

const Search = () => {
  const { query } = useLocalSearchParams();
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <Text style={tw`text-3xl text-white`}>{query}</Text>
    </SafeAreaView>
  );
};

export default Search;
