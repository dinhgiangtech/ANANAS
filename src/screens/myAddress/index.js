/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Loading from '../../components/activityIndicator';
import {auth} from '../../screens/setup';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
const MyAddress = ({navigation}) => {
  const initAddress = {
    fname: '',
    lname: '',
    number: '',
    city: '',
    district: '',
    ward: '',
    address: '',
  };

  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('address')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        console.log(documentSnapshot.data());
        if (documentSnapshot.data()) {
          setAddress(documentSnapshot.data());
          setLoading(false);
        } else {
          setLoading(false);
          return;
        }
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <View>
      {loading ? (
        <View style={{marginTop: '50%'}}>
          <Loading />
        </View>
      ) : (
        <View>
          {address ? (
            <View style={styles.container}>
              <View style={styles.name}>
                <Text style={styles.textName}>
                  {address.fname + ' ' + address.lname}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.icon}>
                  <MaterialCommunityIcons
                    name={'window-close'}
                    color={'#000'}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.address}>
                <Text style={styles.textAddress}>
                  Địa chỉ:
                  {address.address +
                    ' - ' +
                    address.ward +
                    ' - ' +
                    address.district +
                    ' - ' +
                    address.city}
                </Text>
              </View>
              <View style={styles.address}>
                <Text style={styles.textAddress}>
                  Số điện thoại: {address.number}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateAddress')}
                style={styles.wrapBt}>
                <View style={styles.btEdit}>
                  <Text style={styles.textBt}>CẬP NHẬT</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.name}>
                <Text style={styles.textName}>Chưa cập nhật</Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.icon}>
                  <MaterialCommunityIcons
                    name={'window-close'}
                    color={'#000'}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.address}>
                <Text style={styles.textAddress}>Địa chỉ:Chưa cập nhật</Text>
              </View>
              <View style={styles.address}>
                <Text style={styles.textAddress}>
                  Số điện thoại: Chưa cập nhật
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateAddress')}
                style={styles.wrapBt}>
                <View style={styles.btEdit}>
                  <Text style={styles.textBt}>CẬP NHẬT NGAY</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MyAddress;
