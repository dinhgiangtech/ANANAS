import {auth} from '../../screens/setup';
import React from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function updateUser(value) {
  console.log(value);
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .update({
      fname: value.fname,
      lname: value.lname,
      gender: value.gender,
      date: value.date,
      sizeShoe: value.sizeShoe,
      sizeShirt: value.sizeShirt,
      address: value.address,
    })
    .then(() => {
      Alert.alert('Thông tin đã được cập nhật!');
    })
    .catch(e => {
      Alert.alert(e.toString());
    });
}
