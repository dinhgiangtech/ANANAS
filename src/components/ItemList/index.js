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
  View,
} from 'react-native';
import applicationTheme from '../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {AddCart} from '../../reduxs/actions';

function ItemList({data, navigation}) {
  const [heart, setHeart] = useState(false);
  const changeHeart = () => {
    setHeart(heart => (heart = !heart));
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {data: data})}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: data.image[0]}} />
        </View>
        <View style={styles.price}>
          <Text>{data.price}</Text>
        </View>
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
                size={40}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color={applicationTheme.primary}
                size={40}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ItemList;
