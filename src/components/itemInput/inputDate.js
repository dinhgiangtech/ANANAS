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

import DatePicker from 'react-native-datepicker';
import applicationTheme from '../../themes/applicationStyle';
import colors from '../../themes/colors';

const InputDate = ({navigation, values, errors, touched, handleChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NGÀY SINH</Text>

      <DatePicker
        style={{marginTop: 2, width: 200}}
        date={values.date}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1910-05-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={handleChange('date')}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
      />
      {errors.date && touched.date ? (
        <Text style={styles.textAlert}>{errors.date}</Text>
      ) : null}
    </View>
  );
};
export default InputDate;
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
