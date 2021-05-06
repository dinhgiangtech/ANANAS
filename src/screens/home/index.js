import React from 'react';
import {FlatList, View} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';
import Header from '../../components/header';
import Categories from './item/categories';
import data from '../../services/data';
import ItemList from './item/itemList';
import styles from './styles';
const SaleOff = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={'New Arrival'} />
      <Categories />
      <View style={styles.list}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemList data={item} />}
        />
      </View>
    </View>
  );
};
export default SaleOff;
