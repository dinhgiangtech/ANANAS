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

const InputNumber = ({navigation, handleChange, values, errors, touched}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Số điện thoại</Text>
      <TextInput
        value={values.number}
        onChangeText={handleChange('number')}
        style={styles.textAddress}
        keyboardType={'numeric'}
      />
      {errors.date && touched.date ? (
        <Text style={styles.textAlert}>{errors.date}</Text>
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

export default InputNumber;
