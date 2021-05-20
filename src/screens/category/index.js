/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from '../../themes/colors';
import HeaderBack from '../../components/headerBack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const Item = ({navigation, title, type}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ListProducts', {
          type: type,
          target: title,
          title: title.toUpperCase(),
        });
      }}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Category = ({navigation, route}) => {
  const {title, cate, type} = route.params;
  return (
    <View>
      <HeaderBack navigation={navigation} title={title} />
      <FlatList
        data={cate}
        renderItem={({item}) => (
          <Item navigation={navigation} type={type} title={item} />
        )}
      />
    </View>
  );
};

export default Category;
