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

const ButtonSubmit = ({handleSubmit}) => {
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <View style={styles.btRegister}>
        <Text style={styles.textBt}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btRegister: {
    height: 60,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: applicationTheme.primary,
    alignItems: 'center',
  },
  textBt: {
    letterSpacing: 3,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ButtonSubmit;
