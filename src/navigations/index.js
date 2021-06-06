import React, {useContext, useState, useEffect} from 'react';

import messaging from '@react-native-firebase/messaging';

import Route from './route';
export default function RootNavigation() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return <Route />;
}
