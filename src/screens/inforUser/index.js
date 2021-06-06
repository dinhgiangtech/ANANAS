/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import * as yup from 'yup';
import styles from './styles';
import {auth} from '../../screens/setup';
import firestore from '@react-native-firebase/firestore';

import Form from './formIk';
import Loading from '../../components/activityIndicator';

const InformationUser = ({navigation}) => {
  const initUser = {
    fname: '',
    lname: '',
    date: '',
    gender: '',
    sizeShoe: '',
    sizeShirt: '',
    number: '',
  };
  const [user, setUser] = useState(initUser);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.data()) {
          setUser(documentSnapshot.data());
          setLoading(false);
        } else {
          setLoading(false);
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
          <Form user={user} navigation={navigation} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default InformationUser;
