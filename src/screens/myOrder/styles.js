import React from 'react';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30,
    flex: 1,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    height: 60,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: applicationTheme.fontFamily,
  },
  item: {
    paddingTop: 10,
    height: 120,
    justifyContent: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapName: {
    width: '50%',
    height: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: applicationTheme.fontFamily,
  },
  wrapPrice: {
    width: '100%',
    height: '15%',
    marginTop: 20,
    borderTopWidth: 0.4,
    paddingTop: 20,
  },
  wrapTotal: {
    width: '100%',
    height: '10%',
    marginTop: 20,
    paddingTop: 30,
  },
  btRegister: {
    height: 60,
    paddingVertical: 5,
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: applicationTheme.primary,
    alignItems: 'center',
  },
  textBt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;
