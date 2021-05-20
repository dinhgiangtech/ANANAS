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
} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import colors from '../../themes/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderDefault = ({navigation, title}) => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color={'#000'} size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBt: {
    letterSpacing: 3,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
});

export default HeaderDefault;
