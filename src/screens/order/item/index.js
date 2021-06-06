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

import {moneyFormat} from '../../../utils/moneyFomat';

import styles from '../styles';
const Item = ({data}) => {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.wrapName}>
          <Text style={{fontSize: 16}}>{data.name}</Text>
        </View>
        <View>
          <Text style={{fontSize: 16}}>{moneyFormat(data.price)}</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.wrapName}>
          <Text style={{fontSize: 16}}>Size:{data.selectSize}</Text>
        </View>
        <View>
          <Text style={{fontSize: 16}}>x{data.quantity}</Text>
        </View>
      </View>
    </View>
  );
};
export default Item;
