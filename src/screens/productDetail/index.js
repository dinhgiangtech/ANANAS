/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
} from 'react-native';
import {windowWidth} from '../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {AddCart} from '../../reduxs/actions';
import Item from './component/itemImage';
import styles from './styles';
import applicationTheme from '../../themes/applicationStyle';
const ProductDetail = ({navigation, route}) => {
  const {data} = route.params;
  const {image} = data;
  const state = useSelector(result => result._todoProduct);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(AddCart(data));
    dispatch({type: 'Add_To_Cart'});
  };

  return (
    <ScrollView>
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
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart-outline"
              size={35}
              color={applicationTheme.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapPrice}>
          <Text style={styles.textPrice}>đ {data.price}</Text>
          <Text style={styles.textStatus}> {data.status}</Text>
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.btBuy}>
          <Text style={styles.txtBtBuy}>THÊM VÀO GIỎ</Text>
        </TouchableOpacity>
        <View style={styles.wrapSize}>
          <Text style={styles.textName}>Size</Text>
          <FlatList
            style={{paddingTop: 20}}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            horizontal={true}
            data={data.size}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={styles.boxSize}>
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.wrapSize}>
          <Text style={styles.textName}>Description</Text>
          <Text style={styles.txtDescription}>{data.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
