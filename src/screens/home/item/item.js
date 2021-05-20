/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {windowWidth} from '../../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Item({uri, navigation}) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri}} style={styles.img} />
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth,
    height: 300,
  },
  img: {
    width: windowWidth,
    height: 300,
  },
  iconClose: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
});

export default Item;
