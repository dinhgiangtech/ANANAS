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
import {DeleteCart, DeleteWhishList} from '../../../reduxs/actions';
import {AddCart} from '../../../reduxs/actions';

function Options({data, openModal, visible, closeModal}) {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(DeleteWhishList({id: data.id}));
    dispatch({type: 'Add_To_Wish'});
  };
  const moveToBag = () => {
    deleteItem();
    dispatch(AddCart(data));
    dispatch({type: 'Add_To_Cart'});
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      hardwareAccelerated={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalView}>
        <View style={styles.headerModal}>
          <Text style={styles.textHeader}>OPTIONS</Text>
          <TouchableOpacity onPress={closeModal} style={styles.iconClose}>
            <MaterialCommunityIcons name={'window-close'} size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={moveToBag} style={styles.item}>
          <MaterialCommunityIcons name={'briefcase-outline'} size={25} />
          <Text style={styles.text}>CHUYỂN TỚI GIỎ HÀNG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteItem} style={styles.item}>
          <MaterialCommunityIcons name={'trash-can-outline'} size={25} />
          <Text style={styles.text}>XÓA KHỎI MỤC ƯA THÍCH</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 30,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: applicationTheme.fontFamily,
  },
  item: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    height: 40,
  },
  btBuy: {
    marginTop: 30,
    justifyContent: 'center',
    borderWidth: 0.5,
    alignItems: 'flex-start',
    height: 50,
    backgroundColor: applicationTheme.primary,
  },
  text: {
    fontSize: 13,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
  },
  textbt: {
    color: '#fff',
    fontSize: 17,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
  },
});

export default Options;
