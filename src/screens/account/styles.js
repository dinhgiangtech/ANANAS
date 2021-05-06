/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {windowWidth, windowHeight} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  window_close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  bottom: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: '#ffff',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  login: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    height: '35%',
  },
  register: {
    width: '100%',
    borderColor: '#000',
    height: '35%',
    backgroundColor: applicationTheme.primary,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textLogin: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  textRegister: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default styles;
