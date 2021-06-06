/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Setup from './src/screens/setup';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => Setup);
