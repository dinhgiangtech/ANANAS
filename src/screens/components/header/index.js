import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="account-outline"
          size={35}
          color={'#000'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    marginLeft: 100,
  },
});
export default Header;
