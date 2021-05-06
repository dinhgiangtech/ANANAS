import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {stackHome} from './appStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import applicationTheme from '../themes/applicationStyle';
import {windowHeight} from '../themes/dimensions';
import Home from '../screens/home';
import Account from '../screens/account';

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
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
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="fire" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cart-arrow-right"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Target"
        component={Home}
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
