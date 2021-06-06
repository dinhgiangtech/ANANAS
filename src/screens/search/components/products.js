import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {windowWidth, windowHeight} from '../..//../themes/dimensions';
import ItemList from '../../../components/ItemList';
import applicationTheme from '../../../themes/applicationStyle';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../../components/activityIndicator';
const Product = ({navigation, type, target, title}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const getProducts = async () => {
    try {
      const list = [];
      setLoading(true);
      await firestore()
        .collection('products')
        .where(type, '==', target)
        .limit(4)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(element => {
            list.push({
              id: element.data().id,
              description: element.data().description,
              name: element.data().name,
              gender: element.data().gender,
              status: element.data().status,
              fashion: element.data().fashion,
              price: element.data().price,
              image: Object.values(element.data().image),
              size: Object.values(element.data().size),
              realprice: element.data().realprice,
            });
          });

          setData(list);
          setLoading(false);
        });
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    getProducts();
    // Stop listening for updates when no longer required
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.brand}>
          <Text style={styles.txtBrand}>{title}</Text>
        </View>
        <View style={styles.seemore}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ListProducts', {
                type: type,
                target: target,
                title,
              })
            }>
            <Text style={styles.txtseemore}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!loading ? (
        <View>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ItemList navigation={navigation} data={item} />
            )}
          />
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
};
export default Product;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight * 0.5,
    paddingLeft: 30,
    marginTop: 70,
    marginBottom: 20,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.09,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  brand: {
    flex: 2,
    justifyContent: 'center',
  },
  seemore: {
    justifyContent: 'center',
    marginRight: 60,
  },
  txtBrand: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: applicationTheme.primary,
  },
  txtseemore: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: applicationTheme.primary,
    borderBottomWidth: 2,
  },
});
