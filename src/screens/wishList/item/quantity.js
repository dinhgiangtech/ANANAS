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
import {DecreaseQuantity, IncreaseQuantity} from '../../../reduxs/actions';
function Quantity({data, quantity, visible, closeModal}) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(IncreaseQuantity({id: data.id, quantity: data.quantity}));
    dispatch({type: 'Add_To_Cart'});
  };
  const decreaseQuantity = () => {
    dispatch(DecreaseQuantity({id: data.id, quantity: data.quantity}));
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
          <Text style={styles.textHeader}>Quantity</Text>
          <TouchableOpacity onPress={closeModal} style={styles.iconClose}>
            <MaterialCommunityIcons name={'window-close'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapNum}>
          <Text style={styles.text}>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={increaseQuantity} style={styles.wrapBt}>
          <View style={styles.bt}>
            <Text style={{color: '#fff', fontWeight: 'bold', letterSpacing: 1}}>
              THÊM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.wrapBt}>
          <View style={styles.btSub}>
            <Text style={{fontWeight: 'bold', letterSpacing: 1}}>TRỪ</Text>
          </View>
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
  text: {
    fontSize: 18,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  wrapNum: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapBt: {
    width: '100%',
    height: 40,
    borderWidth: 0.4,
    marginBottom: 20,
  },
  bt: {
    height: 40,
    backgroundColor: applicationTheme.primary,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  btSub: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default Quantity;
