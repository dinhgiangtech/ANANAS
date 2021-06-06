import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import applicationTheme from '../../../themes/applicationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moneyFormat} from '../../../utils/moneyFomat';

const Footer = ({price, openModal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapPrice}>
        <Text style={{fontWeight: 'bold', letterSpacing: 1, fontSize: 15}}>
          TỔNG TIỀN :
        </Text>
        <Text style={{fontWeight: 'bold', letterSpacing: 1, fontSize: 13}}>
          {moneyFormat(price)}
        </Text>
      </View>
      <TouchableOpacity onPress={openModal} style={styles.btBuy}>
        <Text style={styles.textbt}>MUA NGAY</Text>
        <MaterialCommunityIcons name={'arrow-right'} color={'#fff'} size={25} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btBuy: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: applicationTheme.primary,
  },
  textbt: {
    color: '#fff',
    fontSize: 17,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Footer;
