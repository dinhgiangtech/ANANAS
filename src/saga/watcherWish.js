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

export function* AddToWish() {
  try {
    const value = yield select(state => state._todoWishList);
    const jsonValue = JSON.stringify(value);
    yield AsyncStorage.setItem('Wish', jsonValue);
  } catch (e) {
    console.log(e.message);
  }
}

export function* watcherWish() {
  yield takeEvery('Add_To_Wish', AddToWish);
}
