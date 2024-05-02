import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import tw from '../../lib/tailwind';
import CustomButton from '../../components/CustomButton';
import { signOut } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const profile = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/sign-in');
  };
  return (
    <SafeAreaView>
      <View>
        <Text>profile</Text>
        <Button onPress={logout} title='Sign Out' />
      </View>
    </SafeAreaView>
  );
};

export default profile;
