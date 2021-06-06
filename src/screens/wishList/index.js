import React, {useEffect, useState} from 'react';
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
const WhishList = ({navigation}) => {
  const {numberWish, List} = useSelector(state => state._todoWishList);

  return (
    <View style={[styles.container]}>
      <Header title={'Wish List'} navigation={navigation} />
      <View style={styles.wrapProducts}>
        <Text style={styles.txtNum}>{numberWish} SẢN PHẨM</Text>
      </View>
      <FlatList
        data={List}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ItemList navigation={navigation} data={item} />
        )}
      />
    </View>
  );
};
export default WhishList;
