import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import { images } from '../../constants';
import FormField from '../../components/auth/FormField';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {};

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView>
        <View style={tw`w-full h-full justify-start px-4 my-6`}>
          <Image
            source={images.logo}
            style={tw`w-[150px] h-[120px]`}
            resizeMode='cover'
          />
          <Text style={tw`text-2xl text-white mt-10 font-psemibold`}>
            Login to VidUp
          </Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyle='mt-7'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyle='mt-7'
          />
          <CustomButton
            title='Login'
            handlePress={() => {
              submitForm;
            }}
            isLoading={isSubmitting}
            containerStyles='w-full mt-7'
          />

          <View style={tw`justify-center pt-5 flex-row gap-2`}>
            <Text style={tw`text-lg text-gray-100 font-pregular`}>
              First time here?
            </Text>
            <Link
              href='/sign-up'
              style={tw`text-lg font-semibold text-secondary-100`}
            >
              {' '}
              Register now.
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
