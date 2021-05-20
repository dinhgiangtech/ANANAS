import todoProduct from './cartReducer';
import {combineReducers} from 'redux';

const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
