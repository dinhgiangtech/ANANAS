import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';
const image = [
  'https://ananas.vn/wp-content/uploads/Track-6_Suede_Moonphase_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/KV_Urbas_Unsettling_Banner_Mobile_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/Vintas-Temperate_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/AnanasxLuckyLuke_banner_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg',
];
const Item = ({navigation, data}) => {
  return (
    <View style={styles.item}>
      <Image source={{uri: data.image}} style={styles.imageItem} />
      <TouchableOpacity>
        <Text style={styles.txtTitle}>{data.name}</Text>
      </TouchableOpacity>
      <Text style={styles.textContent}>{data.description}</Text>
    </View>
  );
};
export default Item;
