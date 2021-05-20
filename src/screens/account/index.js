/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
} from 'react-native';
import {windowWidth, windowHeight} from '../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const image = {uri: 'https://ananas.vn//wp-content/uploads/Blog-1980s_5.jpg'};

const Account = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.window_close}>
          <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons
              name="window-close"
              color={'#fff'}
              size={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginEmail')}
            style={styles.login}>
            <View>
              <Text style={styles.textLogin}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterEmail');
            }}
            style={styles.register}>
            <View>
              <Text style={styles.textRegister}>Register</Text>
            </View>
          </TouchableOpacity>
          <View />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Account;
