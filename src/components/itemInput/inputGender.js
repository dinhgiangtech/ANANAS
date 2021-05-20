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

const InputGender = ({navigation, handleChange, values, errors, touched}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GIỚI TÍNH</Text>
      <View style={styles.fullname}>
        <Picker
          selectedValue={values.gender}
          style={{height: 50, width: 100}}
          onValueChange={handleChange('gender')}>
          <Picker.Item label="Nam" value="Nam" />
          <Picker.Item label="Nữ" value="Nữ" />
        </Picker>
      </View>
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
});

export default InputGender;
