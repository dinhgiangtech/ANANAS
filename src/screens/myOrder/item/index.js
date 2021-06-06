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
import {date} from 'yup/lib/locale';
import applicationTheme from '../../../themes/applicationStyle';

import {moneyFormat} from '../../../utils/moneyFomat';

const Item = ({data}) => {
  console.log(data.item);
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text style={{fontSize: 16}}>NGÀY MUA</Text>
        <Text style={styles.text}>{data.date}</Text>
      </View>
      <Text style={{fontSize: 16}}>CÁC SẢN PHẨM ĐÃ MUA:</Text>
      <View style={{paddingLeft: 20}}>
        {data.product.map(item => (
          <Text style={styles.text}>-{item.name}</Text>
        ))}
      </View>
      <View style={styles.row}>
        <Text style={{fontSize: 16}}>TRẠNG THÁI</Text>
        <Text style={styles.text}>Đang giao hàng</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingVertical: 20,
    borderBottomWidth: 0.4,
  },

  row: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: applicationTheme.fontFamily,
  },
});
export default Item;
