import {createStore, applyMiddleware} from 'redux';
import ShopApp from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from '../../saga/index';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(ShopApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

export default store;
