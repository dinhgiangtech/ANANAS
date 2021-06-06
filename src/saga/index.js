import {all} from 'redux-saga/effects';
import {watcherProductToCart} from './watcherCart';
import {watcherWish} from './watcherWish';
export default function* rootWatcher() {
  yield all([watcherProductToCart(), watcherWish()]);
}
