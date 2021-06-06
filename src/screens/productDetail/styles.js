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
    marginBottom: 20,
  },
  wrapName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    paddingVertical: 15,
    paddingLeft: 15,
  },
  textName: {
    width: windowWidth * 0.7,
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: '100',
    letterSpacing: 2,
  },
  wrapPrice: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.4,
    paddingBottom: 20,
  },
  textPrice: {
    marginRight: 20,
    fontWeight: 'bold',
    fontFamily: applicationTheme.fontFamily,
  },
  textStatus: {
    color: '#a9a9a9',
    letterSpacing: 2,
  },
  wrapSize: {
    padding: 15,
  },
  boxSize: {
    width: 60,
    height: 40,
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDescription: {
    fontFamily: applicationTheme.fontFamily,
    lineHeight: 20,
    letterSpacing: 1.5,
    marginTop: 15,
  },
  btAdd: {
    marginTop: 15,
    marginHorizontal: 20,
    width: '90%',
    justifyContent: 'center',
    paddingLeft: 15,
    height: 50,
    borderWidth: 0.5,
  },
  txtBt: {
    fontSize: 18,
  },
  btBuy: {
    margin: 20,
    justifyContent: 'center',
    height: 50,
    borderWidth: 0.5,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  btSelect: {
    marginLeft: 20,
    width: '30%',
    justifyContent: 'center',
    height: 50,
    borderWidth: 0.5,
  },
  btBuyNow: {
    marginLeft: 20,
    width: '90%',
    justifyContent: 'center',
    height: 50,
    backgroundColor: applicationTheme.primary,
  },
  txtBtBuy: {
    fontSize: 18,
    color: '#000',
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
  },
  txtBtBuyNow: {
    color: '#fff',
    fontSize: 18,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
  },
  info: {
    fontSize: 15,
  },
  itemContainer: {
    width: windowWidth,
    height: 400,
  },
  img: {
    width: windowWidth,
    height: 400,
  },
  iconClose: {},
});

export default styles;
