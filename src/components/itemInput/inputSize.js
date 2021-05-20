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

const InputSize = ({navigation, handleChange, values, errors, touched}) => {
  return (
    <View style={styles.size}>
      <View style={{width: '50%'}}>
        <Text style={styles.text}>SIZE GIÀY</Text>
        <View style={styles.fullname}>
          <Picker
            selectedValue={values.sizeShoe}
            style={{height: 50, width: 100}}
            onValueChange={handleChange('sizeShoe')}>
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
          </Picker>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <Text style={styles.text}>SIZE ÁO</Text>
        <View style={styles.fullname}>
          <Picker
            selectedValue={values.sizeShirt}
            style={{height: 50, width: 100}}
            onValueChange={handleChange('sizeShirt')}>
            <Picker.Item label="XS" value="XS" />
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
            <Picker.Item label="XL" value="XL" />
          </Picker>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  size: {
    borderColor: '#000',
    height: 80,
    paddingLeft: 40,
    paddingVertical: 10,
    borderWidth: 0.5,
    marginTop: 30,
    flexDirection: 'row',
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

export default InputSize;
