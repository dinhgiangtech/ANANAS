import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';
import styles from './styles';
import ItemList from './item/item';
import {useSelector} from 'react-redux';
const Bag = ({navigation}) => {
  const data = useSelector(state => state._todoProduct.Carts);
  const numberCart = useSelector(state => state._todoProduct.numberCart);

  return (
    <View style={[styles.container]}>
      <Header title={'Bag'} navigation={navigation} />
      <View style={styles.wrapProducts}>
        <Text style={styles.txtNum}>{numberCart} SẢN PHẨM</Text>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ItemList navigation={navigation} data={item} />
        )}
      />
    </View>
  );
};
export default Bag;
