import React from 'react';
import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  categories: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  list: {
    height: '75%',
  },
  scrollView: {
    paddingVertical: 20,
  },
  itemCategories: {
    borderColor: '#000',
    borderWidth: 0.8,
    height: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  txtItemCategories: {
    fontFamily: 'NunitoSanSBoldI',
    fontSize: 18,
    letterSpacing: 3,
  },
});
export default styles;
