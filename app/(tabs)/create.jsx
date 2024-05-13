import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import tw from '../../lib/tailwind';
import FormField from '../../components/auth/FormField';
import { ResizeMode, Video } from 'expo-av';
import { icons } from '../../constants';

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: '',
  });
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView style={tw`px-4 my-6`}>
        <Text style={tw`text-white text-2xl text-center font-psemibold`}>
          Upload Video
        </Text>

        <FormField
          title='Video Title'
          value={form.title}
          placeholder='Give your video a title.'
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyle='mt-10'
        />

        <View style={tw`mt-7`}>
          <Text style={tw`text-base text-gray-100 font-pmedium`}>
            Upload Video
          </Text>

          <TouchableOpacity>
            {form.video ? (
              <Video
                style={tw`w-full h-64 rounded-2xl`}
                source={{ uri: form.video.uri }}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View
                style={tw`w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center`}
              >
                <View
                  style={tw`w-14 h-14 border-dashed border-secondary-100 justify-center items-center`}
                >
                  <Image
                    style={tw`w-1/2 h-1/2`}
                    source={icons.upload}
                    resizeMode='contain'
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
