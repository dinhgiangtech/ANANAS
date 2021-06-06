import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {stackHome} from './appStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import applicationTheme from '../themes/applicationStyle';
import {windowHeight} from '../themes/dimensions';
import Home from '../screens/home';
import Search from '../screens/search';
import {SearchStack, SaleOffStack, ShoppingBag, StackWish} from './childStack';
import SaleOff from '../screens/home';
import {useSelector} from 'react-redux';
import Target from '../screens/target';
const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  const numberCart = useSelector(state => state._todoProduct.numberCart);
  const numberWish = useSelector(state => state._todoWishList.numberWish);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: applicationTheme.primary,
        showLabel: false,
        style: {paddingHorizontal: 10, height: windowHeight * 0.1},
      }}>
      <Tab.Screen
        name="Home"
        component={SaleOffStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="fire" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={StackWish}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: numberWish === 0 ? null : numberWish,
        }}
      />
      <Tab.Screen
        name="Bag"
        component={ShoppingBag}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cart-arrow-right"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: numberCart === 0 ? null : numberCart,
        }}
      />
      <Tab.Screen
        name="Target"
        component={Target}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bullseye-arrow"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: 1,
        }}
      />
    </Tab.Navigator>
  );
}
export function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
