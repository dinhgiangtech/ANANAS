import React, {useEffect, useState} from 'react';

import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {AddCart, AddWhishList, DeleteWhishList} from '../../reduxs/actions';
import {moneyFormat} from '../../utils/moneyFomat';
function ItemList({data, navigation}) {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const {List} = useSelector(state => state._todoWishList);
  useEffect(() => {
    const found = List.find(item => item.id === data.id);
    if (found) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  }, [List]);
  const changeHeart = () => {
    if (!heart) {
      setHeart(true);
      dispatch(AddWhishList(data));
      dispatch({type: 'Add_To_Wish'});
    } else {
      setHeart(false);

      dispatch(DeleteWhishList({id: data.id}));
      dispatch({type: 'Add_To_Wish'});
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {data: data})}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: data.image[0]}} />
        </View>

        <View style={styles.price}>
          <Text>{moneyFormat(data.price)}</Text>
        </View>
        {data.realprice ? (
          <View style={styles.realprice}>
            <Text disable={true}>{moneyFormat(data.realprice)}</Text>
          </View>
        ) : null}
        <View style={styles.title}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.status}>
          <Text>{data.status}</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity onPress={changeHeart}>
            {heart ? (
              <MaterialCommunityIcons
                name="heart"
                color={applicationTheme.primary}
                size={35}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color={applicationTheme.primary}
                size={35}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ItemList;
