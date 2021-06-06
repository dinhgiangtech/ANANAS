/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Alert,
  View,
} from 'react-native';
import RootNavigation from '../navigations';
import {LoginManager, AccessToken, Profile} from 'react-native-fbsdk-next';
import {auth, firebase, GoogleSignin} from './setup';
import firestore from '@react-native-firebase/firestore';

import Context from '../context';
import {LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {InitialCart, InitialWishList} from '../reduxs/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [bag, setBag] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(result => result._todoProduct);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        const obj = JSON.parse(value);
        dispatch(InitialCart(obj));
      }
    } catch (e) {
      // error reading value
    }
  };
  const getWish = async () => {
    try {
      const wish = await AsyncStorage.getItem('Wish');
      if (wish !== null) {
        const obj = JSON.parse(wish);
        dispatch(InitialWishList(obj));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    getWish();
  }, []);
  return <RootNavigation />;
};

export default App;
