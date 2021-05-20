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
    paddingTop: StatusBar.currentHeight,
    marginBottom: 40,
  },
  scrollView: {
    marginHorizontal: 40,
    marginVertical: 30,
  },
  logout: {
    width: '100%',
    height: 60,
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: applicationTheme.primary,
  },
  item: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
  },
  text: {
    fontFamily: applicationTheme.fontFamily,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textLogout: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default styles;
