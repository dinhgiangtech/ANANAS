/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  header: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    height: 80,
    paddingLeft: 20,
  },
  item: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    height: 70,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  textItem: {
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default styles;
