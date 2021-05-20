import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SearchBar = ({handleShow}) => {
  return (
    <TouchableWithoutFeedback onPress={handleShow}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="magnify" size={35} color={'#000'} />
        </View>

        <Text style={styles.input}>Tim kiem san pham</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: windowHeight * 0.08,
    fontSize: 20,
    position: 'absolute',
    left: 65,
    top: 25,
    color: '#a9a9a9',
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: windowHeight * 0.1 * 0.3,
  },
});
