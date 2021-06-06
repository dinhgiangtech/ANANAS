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
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import Options from './option';
import Quantity from './quantity';
import {useSelector} from 'react-redux';
import {moneyFormat} from '../../../utils/moneyFomat';

function ItemList({data, navigation}) {
  const quantity = data.quantity;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalChildVisible, setModalChildVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const openChildModal = () => {
    setModalVisible(false);
    setModalChildVisible(true);
  };
  const closeChildModal = () => {
    setModalChildVisible(false);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {data: data})}>
      <View style={styles.container}>
        <Options
          closeModal={closeModal}
          openModal={openChildModal}
          visible={modalVisible}
          data={data}
        />
        <Quantity
          quantity={quantity}
          closeModal={closeChildModal}
          visible={modalChildVisible}
          data={data}
        />
        <View>
          <Image style={styles.image} source={{uri: data.image[0]}} />
        </View>
        <View style={styles.content}>
          <View style={styles.wrapPrice}>
            <Text style={styles.text}>{moneyFormat(data.price)}</Text>
          </View>
          <Text style={styles.textName}>{data.name}</Text>
          <Text style={styles.text}>Status: {data.status}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.dots} onPress={openModal}>
        <View>
          <MaterialCommunityIcons name={'dots-vertical'} size={30} />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: {
    width: windowWidth * 0.5,
    height: 180,
  },

  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  content: {
    marginLeft: 10,
    width: '35%',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },
  wrapPrice: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: 120,
    alignItems: 'center',
    marginBottom: 20,
  },
  dots: {
    position: 'absolute',
    right: 10,
    top: 75,
  },
  modalView: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 30,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default ItemList;
