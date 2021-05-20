// In App.js in a new project

import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/home';
import Account from '../screens/account';
import {HomeTabs} from './bottonTabBar';
import BottomTabBar from './bottonTabBar';
import Login from '../screens/login';
import Register from '../screens/register';
import RegisterEmail from '../screens/registerEmail/index';
import LoginEmail from '../screens/loginEmail';
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
      <Stack.Screen
        name="RegisterEmail"
        component={RegisterEmail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginEmail"
        component={LoginEmail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
