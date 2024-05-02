import { View, Text, FlatList } from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const Trending = ({ posts }) => {
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={tw`text-gray-100 text-3xl`}>{item.id}</Text>
      )}
    />
  );
};

export default Trending;
