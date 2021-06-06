/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import * as yup from 'yup';
import styles from './styles';
import {auth} from '../../screens/setup';
import firestore from '@react-native-firebase/firestore';
import Form from './formIk';
import Loading from '../../components/activityIndicator';

const UpdateAddress = ({navigation, route}) => {
  const initAddress = {
    fname: '',
    lname: '',
    number: '',
    city: '',
    district: '',
    ward: '',
    address: '',
  };
  const [address, setAddress] = useState(initAddress);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

  // Stop listening for updates when no longer required

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <Form address={address} navigation={navigation} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default UpdateAddress;
