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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Context from '../../context';
import images from '../../themes/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {register} from '../../services/Authentication';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const initialValues = {
    email: '',
    password: '',
    rePassword: '',
    secureTextEntry: true,
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Không được bỏ trống'),
    password: yup
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 kí tự')
      .required('Không được bỏ trống'),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
      .required('Không được bỏ trống'),
  });

  function handleSubmit(value) {
    console.log(value.email);
    register(value.email, value.password);
    return;
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => {
              navigation.goBack();
            }}>
            <View>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'#000'}
                size={40}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.title}>
            <Text style={styles.textTitle}>REGISTER</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={value => {
          handleSubmit(value);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          values,
        }) => (
          <View style={styles.form}>
            <View style={styles.mail}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                style={styles.input}
              />
              {errors.email && touched.email ? (
                <Text style={styles.textAlert}>{errors.email}</Text>
              ) : null}
            </View>
            <View style={styles.pass}>
              <Text style={styles.text}>Mật khẩu</Text>
              <View style={styles.wrapText}>
                <TextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={secureTextEntry}
                  style={styles.inputPass}
                />
                <TouchableOpacity
                  onPress={() => {
                    setSecureTextEntry(
                      secureTextEntry => (secureTextEntry = !secureTextEntry),
                    );
                  }}>
                  {secureTextEntry ? (
                    <MaterialCommunityIcons name={'eye'} size={20} />
                  ) : (
                    <MaterialCommunityIcons name={'eye-off'} size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={styles.textAlert}>{errors.password}</Text>
              ) : null}
            </View>
            <View style={styles.pass}>
              <Text style={styles.text}>Nhập lại mật khẩu</Text>
              <View style={styles.wrapText}>
                <TextInput
                  value={values.rePassword}
                  onChangeText={handleChange('rePassword')}
                  secureTextEntry={secureTextEntry}
                  style={styles.inputPass}
                />
                <TouchableOpacity
                  onPress={() => {
                    setSecureTextEntry(
                      secureTextEntry => (secureTextEntry = !secureTextEntry),
                    );
                  }}>
                  {secureTextEntry ? (
                    <MaterialCommunityIcons name={'eye'} size={20} />
                  ) : (
                    <MaterialCommunityIcons name={'eye-off'} size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.rePassword && touched.rePassword ? (
                <Text style={styles.textAlert}>{errors.rePassword}</Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.btRegister}>
                <Text style={styles.textBt}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
