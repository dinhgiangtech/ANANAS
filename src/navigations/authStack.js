// In App.js in a new project

import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabBar from './bottonTabBar';
import InformationUser from '../screens/inforUser';
import ShoppingBag from '../screens/shoppingBag';
import WishList from '../screens/wishList';
import User from '../screens/user';
import MyAddress from '../screens/myAddress';
import UpdateAddress from '../screens/updateAddress';
import MyOrder from '../screens/myOrder';
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
      <Stack.Screen
        name="inforUser"
        component={InformationUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingBag"
        component={ShoppingBag}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
