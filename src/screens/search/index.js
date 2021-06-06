import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';
import Header from '../../components/header';
import data from '../../services/data';
import styles from './styles';
import ItemSearch from './components/searchInput';
import Category from './components/category';
import Product from './components/products';
import SearchBar from './components/searchBar';
const shoe = ['Basas', 'Vintas', 'Urbas', 'Pattas'];
const shirt = ['Hoodie', 'SweetShirt', 'Graphic Tee'];
const accessories = ['socks', 'Hat'];
const style = ['High Top', 'Low Top'];

const Search = ({navigation}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {show ? (
        <ItemSearch navigation={navigation} handleHide={handleHide} />
      ) : (
        <ScrollView style={styles.scrollView}>
          <Header navigation={navigation} title={'SHOP'} />
          <SearchBar handleShow={handleShow} />
          <Category
            type={'type'}
            cate={shoe}
            navigation={navigation}
            title={'GIÀY'}
          />
          <Category
            type={'type'}
            cate={shirt}
            navigation={navigation}
            title={'ÁO'}
          />
          <Category
            type={'type'}
            cate={accessories}
            navigation={navigation}
            title={'PHỤ KIỆN ĐI KÈM'}
          />
          <Category
            type={'style'}
            cate={style}
            navigation={navigation}
            title={'KIỂU DÁNG'}
          />
          <Product
            navigation={navigation}
            type={'status'}
            target={'New Arrive'}
            title={'NEW ARRIVE'}
          />
          <Product
            navigation={navigation}
            type={'type'}
            target={'Basas'}
            title={'BASAS'}
          />
          <View style={{paddingBottom: 60}}>
            <Product
              navigation={navigation}
              type={'type'}
              target={'Vintas'}
              title={'Vintas'}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default Search;
