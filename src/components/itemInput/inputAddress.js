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

const InputAddress = ({handleChange, title, value, errors, touched, type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange(type)}
        style={styles.textAddress}
      />
      {errors && touched ? (
        <Text style={styles.textAlert}>Không được bỏ trống</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    height: 90,
    paddingLeft: 10,
    borderWidth: 0.5,
    marginTop: 30,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
    color: '#000',
  },
  textAlert: {
    color: colors.waring,
    fontSize: 12,
  },
  fullname: {
    width: '100%',
    flexDirection: 'row',
    height: '60%',
  },
  textAddress: {
    color: '#000',
  },
});

export default InputAddress;
