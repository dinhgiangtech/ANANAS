import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  View,
  Text,
} from 'react-native';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import Product from './products';
import ItemList from '../../../components/ItemList';
import {debounce} from 'debounce';
import Loading from '../../../components/activityIndicator';

const ItemSearch = ({navigation, handleHide}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');
  const getProducts = queryText => {
    if (queryText) {
      const list = [];
      setLoading(true);
      const subcription = firestore()
        .collection('products')
        .orderBy('name')
        .startAt(queryText.toUpperCase())
        .endAt(queryText + '\uf8ff')
        .get()
        .then(querySnapshot => {
          setNum(querySnapshot.size);
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
            });
          });

          setData(list);
          setLoading(false);
        })
        .catch(e => {
          console.log(e.message);
        });
    } else {
      setData([]);
      setNum(0);
    }
  };

  const onChangeText = text => {
    setText(text);
    debounceAccess(text);
  };
  const debounceAccess = useCallback(
    debounce(nextValue => getProducts(nextValue), 1000),
    [],
  );

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={handleHide}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={'#000'} />
        </TouchableOpacity>

        <TextInput
          onChangeText={text => onChangeText(text)}
          value={text}
          placeholderTextColor={'#a9a9a9'}
          placeholder={'Tìm kiếm sản phẩm'}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.iconClose}
          onPress={() => {
            setText('');
            setNum(0);
            setData([]);
          }}>
          <MaterialCommunityIcons
            name="window-close"
            size={30}
            color={'#000'}
          />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={{width: '100%', height: '100%'}}>
          <Loading />
        </View>
      ) : (
        <View>
          {num !== 0 ? (
            <View style={styles.wrapText}>
              <Text style={styles.textResult}>Kết quả :</Text>
              <Text style={styles.text}>
                {' '}
                {num.toString()} kết quả tìm kiếm
              </Text>
            </View>
          ) : null}
          <View style={{marginTop: 30}}>
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
        </View>
      )}
    </View>
  );
};
export default ItemSearch;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: windowHeight * 0.08,
    fontSize: 20,
    position: 'absolute',
    left: 60,
    top: 10,
    width: '100%',
    color: '#000',
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: windowHeight * 0.1 * 0.3,
  },
  iconClose: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  wrapText: {
    width: '100%',
    height: 70,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textResult: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
});
