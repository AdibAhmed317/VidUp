import { View, Text } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import icons from '../../constants/icons';
import TabIcon from '../../components/tabs/TabIcon';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#172554',
            height: 85,
            borderTopWidth: 1,
            borderTopColor: '#172554',
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name='Home'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focused={focused}
                name='Create'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name='Bookmark'
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name='Profile'
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

// Tab icon remove example
// tabBarIcon: ({ focused, color, size }) => null,
