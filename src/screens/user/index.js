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
const User = ({navigation}) => {
  const {logout, user} = useContext(Context);
  const close = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.scrollView}>
      <Header name={user.displayName} navigation={navigation} />
      <TouchableOpacity onPress={() => console.log(user)} style={styles.item}>
        <Text style={styles.text}>THÔNG TIN CÁ NHÂN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>GIỎ HÀNG</Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  logout: {
    width: '100%',
    height: 50,
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: applicationTheme.primary,
  },
  item: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
  },
  text: {
    fontFamily: applicationTheme.fontFamily,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textLogout: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default User;
