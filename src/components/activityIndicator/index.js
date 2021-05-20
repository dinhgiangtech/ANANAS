/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import applicationTheme from '../../themes/applicationStyle';

const Loading = () => {
  // Stop listening for updates when no longer required

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <ActivityIndicator size="large" color={applicationTheme.primary} />
    </View>
  );
};

export default Loading;
