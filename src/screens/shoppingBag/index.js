import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Header from '../../components/header';
import styles from './styles';
import ItemList from './item/item';
import {useSelector} from 'react-redux';
import Footer from './item/footer';
import OptionCheckOut from './item/optionCheck';
const WhishList = ({navigation}) => {
  const data = useSelector(state => state._todoProduct.Carts);
  const numberCart = useSelector(state => state._todoProduct.numberCart);
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(0);
  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  useEffect(() => {
    let value = 0;
    data.forEach(item => {
      value = value + item.price * item.quantity;
    });
    setPrice(value);
  }, [numberCart]);
  return (
    <View style={[styles.container]}>
      <Header title={'BAG'} navigation={navigation} />
      <View style={styles.wrapProducts}>
        <Text style={styles.txtNum}>{numberCart} SẢN PHẨM</Text>
      </View>
      <View style={{paddingBottom: 260}}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemList navigation={navigation} data={item} />
          )}
        />
      </View>
      <OptionCheckOut
        price={price}
        closeModal={closeModal}
        data={data}
        visible={visible}
        navigation={navigation}
      />
      {price != 0 ? <Footer openModal={openModal} price={price} /> : null}
    </View>
  );
};
export default WhishList;
