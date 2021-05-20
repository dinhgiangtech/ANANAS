import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';

import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Category = ({navigation, cate, title, type}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Category', {
          title: title,
          cate: cate,
          type: type,
        })
      }
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Category;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.08,
    paddingLeft: 40,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  text: {
    fontFamily: applicationTheme.fontFamily,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '100',
  },
});
