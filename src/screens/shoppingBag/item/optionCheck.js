import React, {useState, useContext} from 'react';

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
import {useDispatch, useSelector} from 'react-redux';
import {DeleteCart} from '../../../reduxs/actions';
import {moneyFormat} from '../../../utils/moneyFomat';
import Context from '../../../context';
import {useEffect} from 'react';
const Item = ({uri}) => {
  return (
    <Image source={{uri}} style={{width: 60, height: 60, marginLeft: 10}} />
  );
};
function OptionCheckOut({data, navigation, visible, price, closeModal}) {
  const {uid} = useSelector(state => state._user);

  const [dataImage, setDataImage] = useState([]);
  useEffect(() => {
    const values = [];
    data.forEach(element => {
      values.push({image: element.image[0], id: element.id});
    });
    setDataImage(values);
  }, [data]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      hardwareAccelerated={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalView}>
        <View style={styles.headerModal}>
          <Text style={styles.textHeader}>CHECK OUT</Text>
          <TouchableOpacity onPress={closeModal} style={styles.iconClose}>
            <MaterialCommunityIcons name={'window-close'} size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataImage}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <Item uri={item.image} />;
            }}
          />
        </View>
        <View style={styles.wrapMethod}>
          <Text style={{fontSize: 13}}>VẬN CHUYỂN</Text>
          <Text style={{fontSize: 13}}>2 - 5 NGÀY</Text>
        </View>
        <View style={styles.wrapMethod}>
          <Text style={{fontSize: 13}}>THANH TOÁN</Text>
          <Text style={{fontSize: 13}}>THANH TOÁN KHI GIAO</Text>
        </View>
        <View style={styles.wrapMethod}>
          <Text style={{fontSize: 13}}>TỔNG TIỀN</Text>
          <Text style={{fontSize: 13}}>{moneyFormat(price)}</Text>
        </View>
        {uid ? (
          <TouchableOpacity
            onPress={() => {
              closeModal();
              navigation.navigate('NewAddress', {price: price});
            }}
            style={styles.btBuy}>
            <Text style={styles.textbt}>ĐỊA CHỈ</Text>
            <MaterialCommunityIcons
              name={'arrow-right'}
              color={'#fff'}
              size={25}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              closeModal();
              navigation.navigate('LoginEmail');
            }}
            style={styles.btBuy}>
            <Text style={styles.textbt}>ĐĂNG NHẬP ĐỂ MUA</Text>
            <MaterialCommunityIcons
              name={'arrow-right'}
              color={'#fff'}
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '65%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 30,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  wrapMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    height: 60,
    alignItems: 'center',
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
  btBuy: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: applicationTheme.primary,
  },
  textbt: {
    color: '#fff',
    fontSize: 17,
    fontFamily: applicationTheme.fontFamily,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default OptionCheckOut;
