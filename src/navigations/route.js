import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackHome from './appStack';
import AuthStack from './authStack';
import Context from '../context';
import {auth, firebase} from '../screens/setup';
import {ActivityIndicator} from 'react-native';
import applicationTheme from '../themes/applicationStyle';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser, LogOut} from '../reduxs/actions';

export default function Route() {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();
  const uid = useSelector(state => state._user.uid);
  const onAuthStateChanged = user => {
    if (user) {
      dispatch(LoginUser(user));
    } else {
      dispatch(LogOut());
    }
    if (initializing) {
      setInitializing(false);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {uid ? <AuthStack /> : <StackHome />}
    </NavigationContainer>
  );
}
