import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackHome from './appStack';
import AuthStack from './authStack';
import Context from '../context';
import {auth, firebase} from '../screens/setup';
import {ActivityIndicator} from 'react-native';
import applicationTheme from '../themes/applicationStyle';

export default function RootNavigation() {
  const {user, setUser} = useContext(Context);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
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
      {user ? <AuthStack /> : <StackHome />}
    </NavigationContainer>
  );
}
