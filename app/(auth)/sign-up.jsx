import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import { images } from '../../constants';
import FormField from '../../components/auth/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all data.');
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <KeyboardAvoidingView behavior='padding' style={tw`flex-1`}>
        <ScrollView>
          <View style={tw`w-full h-full justify-start items-center px-4 my-6`}>
            <Image
              source={images.logoT}
              style={tw`w-[150px] h-[120px]`}
              resizeMode='cover'
            />
            <Text style={tw`text-2xl text-white mt-10 font-psemibold`}>
              Sign up to VidUp
            </Text>
            <FormField
              title='Username'
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyle='mt-7'
            />
            <FormField
              title='Email'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles='mt-7'
              keyboardType='email-address'
            />
            <FormField
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyle='mt-7'
            />
            <CustomButton
              title='Sign Up'
              handlePress={() => {
                submitForm();
              }}
              isLoading={isSubmitting}
              containerStyles='w-full mt-7'
            />

            <View style={tw`justify-center pt-5 flex-row gap-2`}>
              <Text style={tw`text-lg text-gray-100 font-pregular`}>
                Already have an account? try
              </Text>
              <Link
                href='/sign-in'
                style={tw`text-lg font-semibold text-secondary-100`}
              >
                Loggin in.
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
