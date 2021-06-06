import React, {useState} from 'react';

import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import {useDispatch} from 'react-redux';
import {DeleteCart} from '../../../reduxs/actions';
function Options({data, navigation, visible, closeModal}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      hardwareAccelerated={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={closeModal} style={styles.iconClose}>
          <View style={styles.headerModal}>
            <MaterialCommunityIcons name={'window-close'} size={30} />
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.btRegister}
            onPress={() => {
              closeModal();
              navigation.navigate('ShoppingBag');
            }}>
            <Text style={styles.textBt}>XEM GIỎ HÀNG</Text>
            <MaterialCommunityIcons name={'arrow-right'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 10,
  },
  iconClose: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  btRegister: {
    width: '90%',
    height: 60,
    marginTop: 60,
    borderWidth: 0.5,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBt: {
    color: '#000',
    fontSize: 17,
    fontFamily: applicationTheme.fontFamily,
  },
});

export default Options;
