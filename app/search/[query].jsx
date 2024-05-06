import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import tw from '../../lib/tailwind';
import SearchInput from '../../components/home/SearchInput';
import EmptyState from '../../components/EmptyState';
import { useEffect } from 'react';
import { searchPosts } from '../../lib/appwrite';
import useAppwrite from '../../hooks/useAppwrite';
import VideoCard from '../../components/VideoCard';
import { router, useLocalSearchParams } from 'expo-router';
import { icons } from '../../constants';

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <>
            <VideoCard video={item} />
          </>
        )}
        ListHeaderComponent={() => (
          <View style={tw`my-6 px-4`}>
            <View style={tw`flex flex-row`}>
              <TouchableOpacity
                style={tw`justify-center items-center mr-3`}
                onPress={goBack}
              >
                <Image
                  style={tw`w-4 h-4 m-2`}
                  source={icons.leftArrow}
                  resizeMode='contain'
                />
              </TouchableOpacity>
              <View>
                <Text style={tw`font-pmedium text-sm text-gray-100`}>
                  Search results for
                </Text>
                <Text style={tw`text-2xl font-psemibold text-white`}>
                  {query}
                </Text>
              </View>
            </View>
            <View style={tw`mt-6 mb-8`}>
              <SearchInput initialQuery={query} />
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

export default Search;
