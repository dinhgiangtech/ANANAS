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
import {Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import firebase from '@react-native-firebase/app';
import App from './App';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import store from '../reduxs/store';
import {useEffect} from 'react';
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
  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );

      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
          }
        });
    });
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export {firebase, auth};
export default Setup;
