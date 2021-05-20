import {all} from 'redux-saga/effects';
import {watcherProductToCart} from './watcherCart';
export default function* rootWatcher() {
  yield all([watcherProductToCart()]);
}
