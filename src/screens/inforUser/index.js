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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        setUser(documentSnapshot.data());
        console.log(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  // Stop listening for updates when no longer required

  return (
    <SafeAreaView style={styles.container}>
      {user ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <Form user={user} navigation={navigation} />
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default InformationUser;
