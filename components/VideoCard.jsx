import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';
import { icons, images } from '../constants';
import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View style={tw`flex-col items-center px-4 mb-14`}>
      <View style={tw`flex-row gap-3 items-start`}>
        <View style={tw`justify-center items-center flex-row flex-1`}>
          <View
            style={tw`w-[46px] h-[46px] rounded-lg border border-secondary-100 justify-center items-center`}
          >
            <Image
              style={tw`w-full h-full rounded-lg`}
              source={{ uri: avatar }}
              resizeMode='contain'
            />
          </View>
          <View style={tw`justify-center flex-1 ml-3 gap-y-1`}>
            <Text
              style={tw`text-white font-psemibold text-sm`}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={tw`text-xs text-gray-100 font-pregular`}
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View style={tw`pt-2`}>
          <Image style={tw`w-5 h-5`} source={icons.menu} resizeMode='contain' />
        </View>
      </View>
      {/* video */}
      {play ? (
        <Video
          source={{ uri: video }}
          style={tw`w-full h-60 rounded-xl mt-3 bg-white/10`}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          style={tw`w-full h-60 rounded-xl mt-3 relative justify-center items-center`}
        >
          <Image
            style={tw`h-full w-full rounded-xl`}
            source={{ uri: thumbnail }}
          />
          <Image
            style={tw`w-12 h-12 absolute`}
            source={icons.play}
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
