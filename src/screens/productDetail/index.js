import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {windowWidth} from '../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {AddCart} from '../../reduxs/actions';
import Item from './component/itemImage';
import styles from './styles';
import applicationTheme from '../../themes/applicationStyle';
import {DeleteWhishList, AddWhishList} from '../../reduxs/actions';
import {moneyFormat} from '../../utils/moneyFomat';
import Options from './component/option';
import SelectableFlatlist, {STATE} from 'react-native-selectable-flatlist';
import ModalDropdown from 'react-native-modal-dropdown';

import InputSize from '../../components/itemInput/inputSize';
const ProductDetail = ({navigation, route}) => {
  const {data} = route.params;
  const {image} = data;
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const {List} = useSelector(state => state._todoWishList);
  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState(data.size[0].toString());
  const changeHeart = () => {
    if (!heart) {
      setHeart(true);
      dispatch(AddWhishList(data));
      dispatch({type: 'Add_To_Wish'});
    } else {
      setHeart(false);

      dispatch(DeleteWhishList({id: data.id}));
      dispatch({type: 'Add_To_Wish'});
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const addToCart = () => {
    setModalVisible(true);
    dispatch(
      AddCart({
        ...data,
        selectSize: size,
      }),
    );
    dispatch({type: 'Add_To_Cart'});
  };

  useEffect(() => {
    const found = List.find(item => item.id === data.id);
    if (found) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  }, [List]);

  return (
    <ScrollView>
      <Options
        navigation={navigation}
        closeModal={closeModal}
        visible={modalVisible}
        data={data}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        horizontal={true}
        data={image}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Item navigation={navigation} uri={item} />;
        }}
      />
      <View>
        <View style={styles.wrapName}>
          <Text style={styles.textName}>{data.name}</Text>
          <TouchableOpacity onPress={changeHeart}>
            {heart ? (
              <MaterialCommunityIcons
                name="heart"
                size={35}
                color={applicationTheme.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                size={35}
                color={applicationTheme.primary}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.wrapPrice}>
          <Text style={styles.textPrice}>{moneyFormat(data.price)}</Text>
          <Text style={styles.textStatus}> {data.status}</Text>
        </View>
        <View style={styles.wrapSize}>
          <Text style={styles.textName}>Size</Text>
        </View>
        <ModalDropdown
          defaultValue={size.toString()}
          style={styles.btSelect}
          options={data.size}
          onSelect={(index, value) => {
            setSize(value);
          }}
          textStyle={[styles.txtBtBuy, {marginLeft: 15}]}
          dropdownTextStyle={{fontSize: 18}}
          dropdownStyle={{width: '50%'}}
        />
        <View style={styles.wrapSize}>
          <Text style={styles.textName}>Description</Text>
          <Text style={styles.txtDescription}>{data.description}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={addToCart} style={styles.btBuy}>
          <Text style={styles.txtBtBuyNow}>THÊM VÀO GIỎ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
