// In App.js in a new project

import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ListProducts from '../screens/listProduct';
import Category from '../screens/category';
import ProductDetail from '../screens/productDetail';
import SaleOff from '../screens/home';
import Search from '../screens/search';
import Bag from '../screens/shoppingBag';
const Stack = createStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingBag"
        component={Bag}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export function SaleOffStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SaleOff}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingBag"
        component={Bag}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export function ShoppingBag() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Bag}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingBag"
        component={Bag}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
