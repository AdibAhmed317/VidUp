import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import * as Animatable from 'react-native-animatable';

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      style={tw`mr-5`}
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text>Playing</Text>
      ) : (
        <TouchableOpacity
          style={tw`relative justify-center items-center`}
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            style={tw`w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40`}
            source={{
              uri: item.thumbnail,
            }}
            resizeMode='cover'
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <>
          <Text style={tw`text-gray-100 text-3xl`}>{item.id}</Text>
          <TrendingItem activeItem={activeItem} item={item} />
        </>
      )}
    />
  );
};

export default Trending;
