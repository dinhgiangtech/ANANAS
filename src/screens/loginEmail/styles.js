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
import colors from '../../themes/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    justifyContent: 'center',
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
  },
  iconBack: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  title: {
    position: 'absolute',
    left: 60,
    top: 20,
  },
  form: {
    marginTop: 20,
  },
  mail: {
    borderColor: '#000',
    height: 70,
    paddingLeft: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  pass: {
    borderColor: '#000',
    height: 70,
    paddingLeft: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 30,
  },
  wrapText: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  input: {
    color: '#000',
    width: '100%',
    fontSize: 16,
    height: '80%',
    borderBottomWidth: 0.5,
  },
  inputPass: {
    color: '#000',
    width: '90%',
    fontSize: 16,
    height: '80%',
  },
  btRegister: {
    height: 50,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: applicationTheme.primary,
    alignItems: 'center',
  },
  text: {
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
  },
  textItem: {
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
  textBt: {
    letterSpacing: 3,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  navButton: {
    marginTop: 30,
    marginLeft: 30,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Lato-Regular',
  },
  textAlert: {
    color: colors.waring,
    fontSize: 12,
  },
});

export default styles;
