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
import {Picker} from '@react-native-picker/picker';

const InputEmail = ({user}) => {
  return (
    <View style={styles.mail}>
      <Text style={styles.text}>EMAIL</Text>
      <Text style={styles.text}>{user.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mail: {
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

export default InputEmail;
