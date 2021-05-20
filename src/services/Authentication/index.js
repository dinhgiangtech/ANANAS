import {auth} from '../../screens/setup';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ShowAlert from '../../components/alert';

export async function handleLogin(value) {
  try {
    await auth().signInWithEmailAndPassword(value.email, value.password);
  } catch (e) {
    return Alert.alert(e.message);
  }
}

export async function fbLogin() {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)

      .catch(error => {
        console.log('Something went wrong with sign up: ', error);
      });
  } catch (error) {
    console.log({error});
  }
}
export async function logout() {
  try {
    await auth().signOut();
  } catch (e) {
    console.log(e);
  }
}
export async function googleLogin() {
  try {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)

      .catch(error => {
        console.log('Something went wrong with sign up: ', error);
      });
  } catch (error) {
    console.log({error});
  }
}
export async function register(email, password) {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set({
            fname: '',
            lname: '',
            email: email,
            createdAt: firestore.Timestamp.fromDate(new Date()),
            userImg: null,
          })
          .then(console.log('create success'))
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
            Alert.alert(error.message);
          });
      })
      //we need to catch the whole sign up process if it fails too.
      .catch(error => {
        Alert.alert(error.message);
      });
  } catch (e) {
    Alert.alert(e);
  }
}
