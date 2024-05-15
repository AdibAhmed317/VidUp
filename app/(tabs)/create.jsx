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
import CustomButton from '../../components/CustomButton';
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

  const submit = () => {};

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
                  style={tw`w-20 h-14 border-dashed border-2 border-secondary-100 justify-center items-center`}
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
        <View style={tw`my-7`}>
          <Text style={tw`text-base text-gray-100 font-pmedium`}>
            Thumbnail Upload
          </Text>

          <TouchableOpacity>
            {form.thumbnail ? (
              <Image
                style={tw`w-full h-64 rounded-2xl`}
                resizeMode='cover'
                source={{ uri: form.thumbnail.uri }}
              />
            ) : (
              <View
                style={tw`w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row`}
              >
                <Image
                  style={tw`w-5 h-5`}
                  source={icons.upload}
                  resizeMode='contain'
                />
                <Text style={tw`text-sm text-gray-100 font-pmedium mx-2`}>
                  Chose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title='AI Prompt'
          value={form.title}
          placeholder='Give your video a title.'
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyle='mt-7'
        />

        <CustomButton
          title='Submit & Publish'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
