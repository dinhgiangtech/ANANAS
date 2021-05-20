import React from 'react';
import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 80,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: applicationTheme.fontFamily,
    letterSpacing: 2,
  },
});
export default styles;
