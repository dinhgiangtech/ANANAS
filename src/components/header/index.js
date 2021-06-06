import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Context from '../../context';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const Header = ({title, navigation}) => {
  const uid = useSelector(state => state._user.uid);
  console.log(uid);
  const onPress = () => {
    if (!uid) {
      navigation.navigate('Account');
    } else {
      navigation.navigate('User');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="account-outline"
            size={35}
            color={'#000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
