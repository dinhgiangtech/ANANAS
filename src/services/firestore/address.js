import {auth} from '../../screens/setup';
import React from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function updateAddress(value) {
  firestore()
    .collection('address')
    .doc(auth().currentUser.uid)
    .set({
      fname: value.fname,
      lname: value.lname,
      number: value.number,
      city: value.city,
      district: value.district,
      ward: value.ward,
      address: value.address,
    })
    .then(() => {
      ToastAndroid.show('ĐÃ CẬP NHẬT ĐỊA CHỈ MỞI', ToastAndroid.SHORT);
    })
    .catch(e => {
      Alert.alert(e.toString());
    });
}
