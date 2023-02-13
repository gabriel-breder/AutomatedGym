import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from '../components/TabBar';

import Home from '../screens/Home';
import Activities from '../screens/Activities';
import Workouts from '../screens/Workouts';
import Body from '../screens/Body';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <NavigationContainer independent>
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabBar}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Activities" component={Activities} />
        <Tab.Screen name="Workouts" component={Workouts} />
        <Tab.Screen name="Body" component={Body} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};