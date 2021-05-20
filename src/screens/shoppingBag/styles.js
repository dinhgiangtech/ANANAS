/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },
  wrapProducts: {
    width: windowWidth,
    height: 60,
    justifyContent: 'center',
    paddingLeft: 40,
    borderBottomWidth: 0.4,
  },
  txtNum: {
    color: '#a9a9a9',
  },
});

export default styles;
