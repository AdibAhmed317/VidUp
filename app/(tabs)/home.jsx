import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import tw from '../../lib/tailwind';
import { images } from '../../constants';
import SearchInput from '../../components/home/SearchInput';
import Trending from '../../components/home/Trending';
import EmptyState from '../../components/EmptyState';
import { useState } from 'react';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../hooks/useAppwrite';
import VideoCard from '../../components/VideoCard';

const Home = () => {
  const { data, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <>
            {/* <Text style={tw`text-3xl text-white`}>{item.title}</Text> */}
            <VideoCard video={item} />
          </>
        )}
        ListHeaderComponent={() => (
          <View style={tw`my-6 px-4`}>
            <View style={tw`justify-between items-start flex-row mb-6`}>
              <View>
                <Text style={tw`font-pmedium text-sm text-gray-100`}>
                  Hello There
                </Text>
                <Text style={tw`text-2xl font-psemibold text-white`}>
                  Adib Ahmed
                </Text>
              </View>
              <View style={tw``}>
                <Image
                  source={images.logoT}
                  style={tw`w-14 h-14`}
                  resizeMode='contain'
                />
              </View>
            </View>
            {/* search */}
            <SearchInput />

            <View style={tw`w-full flex-1 pt-5 pb-8`}>
              <Text style={tw`text-green-100 text-lg font-pregular mb-3`}>
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No video found!'
            subtitle='Upload your video now!'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
