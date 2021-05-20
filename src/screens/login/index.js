/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Context from '../../context';
import styles from './styles';
import images from '../../themes/images';
const Login = ({navigation}) => {
  const {fbLogin, googleLogin} = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          fbLogin();
        }}>
        <View style={styles.item}>
          <Image style={styles.image} source={images.FaceBook} />
          <Text style={styles.textItem}>Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          googleLogin();
        }}>
        <View style={styles.item}>
          <Image style={styles.image} source={images.Google} />
          <Text style={styles.textItem}>Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginEmail');
        }}>
        <View style={styles.item}>
          <Image style={styles.image} source={images.Email} />
          <Text style={styles.textItem}>Email</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
