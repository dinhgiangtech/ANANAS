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
  TouchableWithoutFeedback,
  View,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Item from './item';
import {useEffect} from 'react';
import {auth} from '../../screens/setup';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/activityIndicator';
function MyOrder({navigation, route}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const list = [];
    const subscriber = firestore()
      .collection('order')
      .where('userId', '==', auth().currentUser.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(element => {
          list.push({
            address: element.data().address,
            name: element.data().fname + ' ' + element.data().lname,
            date: element.data().date,
            price: element.data().price,
            product: Object.values(element.data().product),
          });
        });
        setData(list);
        setLoading(false);
      });
    return () => subscriber;
  }, []);

  return (
    <View style={styles.modalView}>
      <View>
        <View style={styles.headerModal}>
          <Text style={styles.textHeader}>ĐƠN HÀNG CỦA TÔI</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconClose}>
            <MaterialCommunityIcons name={'window-close'} size={30} />
          </TouchableOpacity>
        </View>
        {loading ? (
          <View
            style={{
              marginTop: '50%',
            }}>
            <Loading />
          </View>
        ) : (
          <View style={{paddingBottom: 150}}>
            {data ? (
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Item data={item} />}
              />
            ) : (
              <Text>CHƯA CÓ ĐƠN HÀNG ĐƯỢC MUA</Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

export default MyOrder;
