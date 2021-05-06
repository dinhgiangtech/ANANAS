/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import App from './App';
import auth from '@react-native-firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyB30hOQP9UGGQV8cdYgmw0UI2GUbKVNufo',
  authDomain: 'anans-245e1.firebaseapp.com',
  projectId: 'anans-245e1',
  storageBucket: 'anans-245e1.appspot.com',
  messagingSenderId: '1007835270039',
  appId: '1:1007835270039:web:049782f0f4b128181f52d2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Setup = () => {
  return <App />;
};
export {firebase, auth};
export default Setup;
