/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import InputName from '../../components/itemInput/inputName';
import InputNumber from '../../components/itemInput/inputNumber';
import ButtonSubmit from '../../components/button/buttonSubmit';
import HeaderDefault from '../../components/headerBack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputAddress from '../../components/itemInput/inputAddress';
import {updateAddress} from '../../services/firestore/address';
import validationSchema from '../../utils/validationForm';
import {add} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
const Form = ({address, price, navigation}) => {
  // Stop listening for updates when no longer required
  const numberCart = useSelector(state => state._todoProduct.numberCart);
  console.log(numberCart);
  const handleSub = values => {
    if (numberCart) {
      updateAddress(values);

      navigation.navigate('Order', {
        ...values,
        price: price,
      });
    } else {
      navigation.goBack();
    }
  };

  return (
    <Formik
      initialValues={{
        fname: address.fname,
        lname: address.lname,
        number: address.number,
        city: address.city,
        district: address.district,
        ward: address.ward,
        address: address.address,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSub(values);
      }}>
      {({handleChange, handleSubmit, touched, errors, values}) => (
        <View style={styles.form}>
          <HeaderDefault title={'THÊM ĐỊA CHỈ'} navigation={navigation} />
          <InputName
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <InputAddress
            title={'THÀNH PHỐ/TỈNH THÀNH'}
            handleChange={handleChange}
            errors={errors.city}
            touched={touched.city}
            value={values.city}
            type={'city'}
          />
          <InputAddress
            title={'QUẬN/HUYỆN'}
            handleChange={handleChange}
            errors={errors.district}
            touched={touched.district}
            value={values.district}
            type={'district'}
          />
          <InputAddress
            title={'PHƯỜNG/XÃ'}
            handleChange={handleChange}
            errors={errors.ward}
            touched={touched.ward}
            value={values.ward}
            type={'ward'}
          />
          <InputAddress
            title={'ĐỊA CHỈ'}
            handleChange={handleChange}
            errors={errors.address}
            touched={touched.address}
            value={values.address}
            type={'address'}
          />

          <InputNumber
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />

          <ButtonSubmit
            handleSubmit={handleSubmit}
            title={'TIẾN HÀNH ĐẶT MUA'}
          />
        </View>
      )}
    </Formik>
  );
};

export default Form;
