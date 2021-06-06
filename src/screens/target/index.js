import React from 'react';
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
import data from '../../services/listNew';
import Item from './item';
const image = [
  'https://ananas.vn/wp-content/uploads/Track-6_Suede_Moonphase_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/KV_Urbas_Unsettling_Banner_Mobile_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/Vintas-Temperate_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/AnanasxLuckyLuke_banner_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg',
];
const Target = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={'DISCOVER YOU'} />
      <View style={{paddingBottom: 100}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item data={item} />}
        />
      </View>
    </View>
  );
};
export default Target;
