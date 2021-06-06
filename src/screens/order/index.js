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
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {DeleteAllCart, DeleteCart, DELETE_ALL_CART} from '../../reduxs/actions';
import {moneyFormat} from '../../utils/moneyFomat';
import {OrderProduct} from '../../services/firestore/order';
import styles from './styles';
import Item from './item';
import {useEffect} from 'react';
import {set} from 'react-native-reanimated';
function Order({navigation, route}) {
  const Carts = useSelector(state => state._todoProduct.Carts);
  const information = route.params;
  const [data, setData] = useState(null);
  console.log(information);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const product = Carts.map(item => {
      return {
        name: item.name,
        id: item.id,
        size: item.selectSize,
        quantity: item.quantity,
      };
    });
    setOrder({
      fname: information.fname,
      lname: information.lname,
      number: information.number,
      address:
        information.address +
        '-' +
        information.ward +
        '-' +
        information.district +
        '-' +
        information.city,
      product: product,
      price: information.price,
    });
  }, []);
  const handleSubmit = () => {
    OrderProduct(order);
    dispatch(DeleteAllCart());
    dispatch({type: 'Add_To_Cart'});
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.modalView}>
      <View style={styles.headerModal}>
        <Text style={styles.textHeader}>ĐƠN HÀNG</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ShoppingBag')}
          style={styles.iconClose}>
          <MaterialCommunityIcons name={'window-close'} size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={Carts} renderItem={({item}) => <Item data={item} />} />
      </View>
      <View style={styles.wrapPrice}>
        <View style={styles.row}>
          <View style={styles.wrapName}>
            <Text style={styles.text}>Phí vận chuyển</Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{moneyFormat(0)}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.wrapName}>
            <Text style={styles.text}>Phí thanh toán</Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{moneyFormat(0)}</Text>
          </View>
        </View>
        <View />
      </View>
      <View style={styles.wrapTotal}>
        <View style={styles.row}>
          <View style={styles.wrapName}>
            <Text style={styles.text}>Tổng cộng</Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{moneyFormat(information.price)}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.btRegister}>
          <Text style={styles.textBt}>HOÀN TẤT ĐẶT MUA</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Order;
