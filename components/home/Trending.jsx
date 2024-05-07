import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../lib/tailwind';
import * as Animatable from 'react-native-animatable';
import { icons } from '../../constants';
import { Video, ResizeMode } from 'expo-av';

const zoomIn = {
  0: {
    scale: 0.8,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1.1,
  },
  1: {
    scale: 0.8,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      style={tw`px-3`}
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <>
          <Video
            source={{ uri: item.video }}
            style={tw`w-52 h-72 rounded-[35px] mt-3 bg-white/10`}
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                setPlay(false);
              }
            }}
          />
        </>
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
          <Image
            source={icons.play}
            style={tw`w-12 h-12 absolute`}
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      style={tw`px-1`}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170 }}
      renderItem={({ item }) => (
        <>
          {/* <Text style={tw`text-gray-100 text-3xl`}>{item.id}</Text> */}
          <TrendingItem activeItem={activeItem} item={item} />
        </>
      )}
    />
  );
};

export default Trending;
