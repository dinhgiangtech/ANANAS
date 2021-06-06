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
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import Context from '../../context';
import images from '../../themes/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../../components/activityIndicator';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [initialize, setInitialize] = useState(false);
  const initialValues = {email: '', password: '', secureTextEntry: true};
  async function handleLogin(value) {
    try {
      setInitialize(true);
      await auth().signInWithEmailAndPassword(value.email, value.password);
    } catch (e) {
      Alert.alert(e.message);
      setInitialize(false);
    }
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Không được bỏ trống'),
    password: yup
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 kí tự')
      .required('Không được bỏ trống'),
  });

  return (
    <View style={styles.container}>
      {initialize ? (
        <Loading />
      ) : (
        <View>
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
                <Text style={styles.textTitle}>LOGIN</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={value => {
              setInitialize(true);
              Keyboard.dismiss();
              handleLogin(value);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              values,
              touched,
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
                          secureTextEntry =>
                            (secureTextEntry = !secureTextEntry),
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
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.btRegister}>
                    <Text style={styles.textBt}>LOGIN</Text>
                  </View>
                  {initialize ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <ActivityIndicator size="large" color={'000'} />
                    </View>
                  ) : null}
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      )}
    </View>
  );
};

export default Login;
