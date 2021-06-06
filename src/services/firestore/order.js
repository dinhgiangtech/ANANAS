import {auth} from '../../screens/setup';
import React from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function OrderProduct(value) {
  console.log(value);
  var today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  firestore()
    .collection('order')
    .add({
      fname: value.fname,
      lname: value.lname,
      number: value.number,
      address: value.address,
      userId: auth().currentUser.uid,
      product: value.product,
      price: value.price,
      date: date,
    })
    .then(() => {
      ToastAndroid.show('ĐÃ ĐẶT HÀNG', ToastAndroid.SHORT);
    })
    .catch(e => {
      Alert.alert(e.toString());
    });
}
