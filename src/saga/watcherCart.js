import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError,
} from '../actions';
import fetch from 'node-fetch';

import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* AddToCart() {
  try {
    const value = yield select(state => state._todoProduct);
    const jsonValue = JSON.stringify(value);
    yield AsyncStorage.setItem('Cart', jsonValue);
  } catch (e) {
    console.log(e.message);
  }
}

export function* watcherProductToCart() {
  yield takeEvery('Add_To_Cart', AddToCart);
}
