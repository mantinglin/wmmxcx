import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Auth Flow */}
                    {/* Todo... */}
                {/* Main Flow */}
                <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
