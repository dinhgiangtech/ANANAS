import React from 'react';
import {StyleSheet} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    marginBottom: 5,
  },
  categories: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight * 0.1,
  },
  list: {
    paddingTop: 20,
  },
  scrollView: {
    paddingVertical: 40,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    width: windowWidth,
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  imageItem: {
    width: '100%',
    height: 200,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  textContent: {
    lineHeight: 25,
    letterSpacing: 1,
    fontFamily: applicationTheme.fontFamily,
  },
});
export default styles;
