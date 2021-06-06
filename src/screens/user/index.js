/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
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
import Context from '../../context';
import applicationTheme from '../../themes/applicationStyle';
import Header from './header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {logout} from '../../services/Authentication';
import styles from './styles';
import {useSelector} from 'react-redux';
const User = ({navigation}) => {
  const {email} = useSelector(state => state._user);
  const close = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.scrollView}>
      <Header name={email} navigation={navigation} />
      <TouchableOpacity
        onPress={() => navigation.navigate('inforUser')}
        style={styles.item}>
        <Text style={styles.text}>THÔNG TIN CÁ NHÂN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyAddress')}
        style={styles.item}>
        <Text style={styles.text}>ĐỊA CHỈ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyOrder')}
        style={styles.item}>
        <Text style={styles.text}>ĐƠN HÀNG CỦA TÔI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>TRỢ GIÚP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={styles.logout}>
        <View>
          <Text style={styles.textLogout}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default User;
