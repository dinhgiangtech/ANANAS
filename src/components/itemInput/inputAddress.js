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

const InputAddress = ({navigation, handleChange, values, errors, touched}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Địa chỉ</Text>
      <TextInput
        value={values.address}
        onChangeText={handleChange('address')}
        style={styles.text}
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
});

export default InputAddress;
