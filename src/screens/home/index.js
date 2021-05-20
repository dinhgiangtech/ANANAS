import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';
import Header from '../../components/header';
import Categories from './item/item';
import data from '../../services/data';
import styles from './styles';
import Item from './item/item';
import Product from './item/products';
const image = [
  'https://ananas.vn/wp-content/uploads/Track-6_Suede_Moonphase_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/KV_Urbas_Unsettling_Banner_Mobile_1500x800.jpg',
  'https://ananas.vn/wp-content/uploads/Vintas-Temperate_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/AnanasxLuckyLuke_banner_mobile.jpg',
  'https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg',
];
const SaleOff = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} title={'Sale Off'} />
      <View style={styles.list}>
        <FlatList
          indicatorStyle={'#000'}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={true}
          horizontal={true}
          data={image}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <Item navigation={navigation} uri={item} />;
          }}
        />
      </View>
      <View style={styles.item}>
        <Image source={{uri: image[4]}} style={styles.imageItem} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ListProducts', {
              type: 'status',
              target: 'Sale Off',
              title: 'SALE OFF',
            })
          }>
          <Text style={styles.txtTitle}>OUTLET-SALE</Text>
        </TouchableOpacity>

        <Text style={styles.textContent}>
          Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online
          - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện
          đang rơi vào tình trạng bể size, bể số.
        </Text>
      </View>
      <Product
        navigation={navigation}
        type={'status'}
        target={'Best Seller'}
        title={'Best Seller'}
      />
    </ScrollView>
  );
};
export default SaleOff;
