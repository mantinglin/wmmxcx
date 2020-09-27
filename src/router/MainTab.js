import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChoresScreen from '../screens/ChoresScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AlbumScreen from '../screens/AlbumScreen';
import MyHomeScreen from '../screens/MyHomeScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
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
            <Tab.Screen name="共享日历" component={CalendarScreen} />
            <Tab.Screen name="家务分配" component={ChoresScreen} />
            <Tab.Screen name="相册管理" component={AlbumScreen} />
            <Tab.Screen name="我的家" component={MyHomeScreen} />
        </Tab.Navigator>
    );
}