/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import {updateUser} from '../../services/firestore/user';
import InputName from '../../components/itemInput/inputName';
import InputDate from '../../components/itemInput/inputDate';
import InputAddress from '../../components/itemInput/inputAddress';
import InputGender from '../../components/itemInput/inputGender';
import InputSize from '../../components/itemInput/inputSize';
import InputEmail from '../../components/itemInput/inputEmail';
import ButtonSubmit from '../../components/button/buttonSubmit';
import HeaderDefault from '../../components/headerBack';

const Form = ({user, navigation}) => {
  const validationSchema = yup.object().shape({
    fname: yup.string().required('Không được bỏ trống'),
    lname: yup.string().required('Không được bỏ trống'),
    date: yup.date().required('Không được bỏ trông'),
    address: yup.string().required('Không được bỏ trống'),
  });

  // Stop listening for updates when no longer required
  const handleSub = values => {
    console.log(values);
    updateUser(values);
  };

  return (
    <Formik
      initialValues={{
        fname: user.fname,
        lname: user.lname,
        date: user.date,
        address: user.address,
        gender: user.gender,
        sizeShoe: user.sizeShoe,
        sizeShirt: user.sizeShirt,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSub(values);
      }}>
      {({handleChange, handleSubmit, touched, errors, values}) => (
        <View style={styles.form}>
          <HeaderDefault title={'THÔNG TIN CÁ NHÂN'} navigation={navigation} />
          <InputEmail user={user} />
          <InputName
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <InputDate
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />

          <InputAddress
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <InputGender
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <InputSize
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <ButtonSubmit handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default Form;
