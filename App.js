import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ChoresScreen from './components/ChoresScreen';
import CalenderScreen from './components/CalenderScreen';
import AlbumScreen from './components/AlbumScreen';
import MyHomeScreen from './components/MyHomeScreen';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconNameMapping = {
              "家务分配": ["clipboard", "clipboard-outline"],
              "共享日历": ["calendar", "calendar-outline"],
              "相册管理": ["images", "images-outline"],
              "我的家": ["home", "home-outline"]
            }
            let iconName = focused ? iconNameMapping[route.name][0] : iconNameMapping[route.name][1];
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="共享日历" component={CalenderScreen} />
        <Tab.Screen name="家务分配" component={ChoresScreen} />
        <Tab.Screen name="相册管理" component={AlbumScreen} />
        <Tab.Screen name="我的家" component={MyHomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
)
