import React, {useState, useEffect} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {windowHeight, windowWidth} from '../../themes/dimensions';
import applicationTheme from '../../themes/applicationStyle';
import HeaderBack from '../../components/headerBack';
import ItemList from '../../components/ItemList';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/activityIndicator';
import {set} from 'react-native-reanimated';
const ListProducts = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {type, target, title} = route.params;
  const getProducts = async () => {
    try {
      setLoading(true);
      const list = [];
      await firestore()
        .collection('products')
        .where(type, '==', target)
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
      return Alert.alert(e.message);
    }
  };
  useEffect(() => {
    getProducts();
    // Stop listening for updates when no longer required
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title={title} />
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.list}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ItemList navigation={navigation} data={item} />
            )}
          />
        </View>
      )}
    </View>
  );
};
export default ListProducts;
