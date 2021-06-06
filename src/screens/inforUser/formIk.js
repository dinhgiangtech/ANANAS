/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import {updateUser} from '../../services/firestore/user';
import InputName from '../../components/itemInput/inputName';
import InputDate from '../../components/itemInput/inputDate';
import InputGender from '../../components/itemInput/inputGender';
import InputSize from '../../components/itemInput/inputSize';
import InputNumber from '../../components/itemInput/inputNumber';
import ButtonSubmit from '../../components/button/buttonSubmit';
import HeaderDefault from '../../components/headerBack';

const Form = ({user, navigation}) => {
  const [idCity, setIdCity] = useState(null);
  const validationSchema = yup.object().shape({
    fname: yup.string().required('Không được bỏ trống'),
    lname: yup.string().required('Không được bỏ trống'),
    date: yup.date().required('Không được bỏ trông'),
    number: yup.string().required('Không được bỏ trống'),
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
        gender: user.gender,
        sizeShoe: user.sizeShoe,
        sizeShirt: user.sizeShirt,
        number: user.number,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSub(values);
      }}>
      {({handleChange, handleSubmit, touched, errors, values}) => (
        <View style={styles.form}>
          <HeaderDefault title={'THÔNG TIN CÁ NHÂN'} navigation={navigation} />
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

          <InputNumber
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
