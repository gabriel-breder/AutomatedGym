import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from '../components/TabBar';

import Home from '../screens/User/Home';
import Users from '../screens/Admin/Users';
import Activities from '../screens/User/Activities';
import Workouts from '../screens/User/Workouts';
import Body from '../screens/User/Body';
import Trainees from '../screens/Personal/Trainees';

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  const role = 'aluno';

  return (
    <NavigationContainer independent>
      {/* Alunos */}
      {
        role === 'aluno' &&
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabBar}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Activities" component={Activities} />
          <Tab.Screen name="Workouts" component={Workouts} />
          <Tab.Screen name="Body" component={Body} />
        </Tab.Navigator>
      }

      {/* Personal */}
      {
        role === 'personal' &&
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabBar}>
          <Tab.Screen name="Trainees" component={Trainees} />
        </Tab.Navigator>
      }

      {/* Admin */}
      {
        role === 'admin' &&
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={TabBar}>
          <Tab.Screen name="Users" component={Users} />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
};