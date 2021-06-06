import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    paddingTop: 20,
    paddingLeft: 20,
  },

  name: {
    width: '100%',
    height: 70,
    justifyContent: 'center',

    borderBottomWidth: 0.4,
  },
  textName: {
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
  },
  address: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    paddingRight: 10,
  },
  textAddress: {
    fontSize: 16,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
    letterSpacing: 1,
  },
  btEdit: {
    width: '50%',
    height: 50,
    backgroundColor: applicationTheme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapBt: {
    marginTop: 20,
    marginLeft: 10,
  },
  textBt: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
export default styles;
