// In App.js in a new project

import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabBar from './bottonTabBar';

import User from '../screens/user';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabBar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
