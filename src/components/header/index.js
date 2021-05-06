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
const Header = ({title, navigation}) => {
  const {user} = useContext(Context);
  const onPress = () => {
    if (!user) {
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
