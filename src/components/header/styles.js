import React from 'react';
import {StyleSheet} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowWidth, windowHeight} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight * 0.1,
    paddingVertical: 10,
    borderBottomColor: applicationTheme.fontColor,
    borderBottomWidth: 0.3,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  title: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  txtTitle: {
    fontFamily: applicationTheme.fontFamily,
    fontSize: 25,
    fontWeight: 'bold',
    color: applicationTheme.fontColor,
  },
});
export default styles;
