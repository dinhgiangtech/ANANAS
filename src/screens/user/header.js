import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({name, navigation}) => {
  const close = () => {
    navigation.navigate('Home');
  };
  const [email, setEmail] = useState('');
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.email}>
        <Text style={styles.nameUser}>{name.toUpperCase()}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.close} onPress={close}>
          <MaterialCommunityIcons
            name="window-close"
            color={'#000'}
            size={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: '#000',
    alignItems: 'center',
  },
  email: {
    flex: 3,
  },
  nameUser: {
    fontSize: 18,
    fontFamily: applicationTheme.fontFamily,
    fontWeight: 'bold',
  },
  close: {},
});
export default Header;
