// In App.js in a new project

import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/home';
import Account from '../screens/account';
import {HomeTabs} from './bottonTabBar';
import BottomTabBar from './bottonTabBar';
import Login from '../screens/login';
import Register from '../screens/register';
const Stack = createStackNavigator();

export default function StackHome() {
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
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
