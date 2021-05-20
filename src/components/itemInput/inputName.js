/* Sample React Native App
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

const InformationUser = ({
  navigation,
  handleChange,
  errors,
  values,
  touched,
}) => {
  // Stop listening for updates when no longer required

  return (
    <View style={styles.mail}>
      <Text style={styles.text}>HỌ VÀ TÊN </Text>
      <View style={styles.fullname}>
        <View style={styles.fname}>
          <TextInput
            value={values.fname}
            onChangeText={handleChange('fname')}
            placeholder={'HỌ'}
            style={{color: '#000'}}
          />
          {errors.fname && touched.fname ? (
            <Text style={styles.textAlert}>{errors.fname}</Text>
          ) : null}
        </View>
        <View style={styles.lname}>
          <TextInput
            value={values.lname}
            onChangeText={handleChange('lname')}
            placeholder={'TÊN'}
            style={{color: '#000'}}
          />
          {errors.fname && touched.lname ? (
            <Text style={styles.textAlert}>{errors.lname}</Text>
          ) : null}
        </View>
      </View>
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
  input: {
    color: '#000',
    width: '100%',
    fontSize: 16,
    height: '70%',
  },
  fullname: {
    width: '100%',
    flexDirection: 'row',
    height: '60%',
  },
  fname: {
    width: '50%',
    height: '70%',
  },

  lname: {
    width: '50%',
    height: '70%',
  },

  text: {
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
  },
  textItem: {
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 20,
    marginTop: 5,
  },

  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  navButton: {
    marginTop: 30,
    marginLeft: 30,
  },
  textAlert: {
    color: colors.waring,
    fontSize: 12,
  },
});

export default InformationUser;
