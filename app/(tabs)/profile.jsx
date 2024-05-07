import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import tw from '../../lib/tailwind';
import SearchInput from '../../components/home/SearchInput';
import EmptyState from '../../components/EmptyState';
import { useEffect } from 'react';
import { getUserPosts, searchPosts, signOut } from '../../lib/appwrite';
import useAppwrite from '../../hooks/useAppwrite';
import VideoCard from '../../components/VideoCard';
import { router, useLocalSearchParams } from 'expo-router';
import { icons, images } from '../../constants';
import { useGlobalContext } from '../../context/GlobalProvider';
import Infobox from '../../components/profile/Infobox';

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const handleSignout = () => {
    signOut();
    router.push('/sign-in');
  };

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <Button title='Sign Out' onPress={handleSignout} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <>
            <VideoCard video={item} />
          </>
        )}
        ListHeaderComponent={() => (
          <View style={tw`w-full justify-center items-center mt-6 mb-12 px-4`}>
            <TouchableOpacity
              style={tw`w-full items-end mb-10`}
              onPress={handleSignout}
            >
              <Image
                style={tw`w-6 h-6`}
                source={icons.logout}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <View
              style={tw`w-16 h-16 border border-secondary-100 rounded-lg justify-center items-center`}
            >
              <Image
                style={tw`w-full h-full rounded-lg`}
                source={{ uri: user?.avatar }}
                resizeMode='cover'
              />
            </View>

            <Infobox
              title={user?.username}
              subtitle='Views'
              containerStyle='mt-5'
              titleStyle='text-lg'
            />

            <View style={tw`mt-5 flex-row`}>
              <Infobox
                title={posts.length || 0}
                subtitle='Posts'
                containerStyle='mr-10'
                titleStyle='text-xl'
              />
              <Infobox
                title='100'
                subtitle='Followers'
                containerStyle='mt-5'
                titleStyle='text-xl'
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No video found!'
            subtitle='No videos found for this search.'
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
