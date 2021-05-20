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

function Options({data, openModal, visible, closeModal}) {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(DeleteCart({quantity: data.quantity, id: data.id}));
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
        <TouchableOpacity onPress={openModal} style={styles.item}>
          <MaterialCommunityIcons name={'briefcase-plus-outline'} size={25} />

          <Text style={styles.text}>SỐ LƯỢNG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <MaterialCommunityIcons name={'heart-outline'} size={25} />
          <Text style={styles.text}>CHUYỂN TỚI MẶT HÀNG YÊU THÍCH</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteItem} style={styles.item}>
          <MaterialCommunityIcons name={'trash-can-outline'} size={25} />
          <Text style={styles.text}>XÓA KHỎI GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '50%',
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
  text: {
    fontSize: 13,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
  },
});

export default Options;
