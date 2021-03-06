import React from 'react';

import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    height: 380,
    marginRight: 3,
    marginLeft: 3,
    marginBottom: 3,
    backgroundColor: '#c0c0c0',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  realprice: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 25,

    backgroundColor: '#fff',
    position: 'absolute',
    top: 195,
    left: 10,
  },
  price: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 25,

    backgroundColor: '#fff',
    position: 'absolute',
    top: 225,
    left: 10,
  },
  title: {
    position: 'absolute',
    left: 10,
    top: 280,
    right: 10,
  },
  name: {
    color: '#000',
    fontSize: 15,
    letterSpacing: 2,
    lineHeight: 20,
    color: '#000',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: 'NunitoSanSBoldI',
  },
  status: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 255,
    left: 10,
    fontWeight: 'bold',
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
export default styles;
