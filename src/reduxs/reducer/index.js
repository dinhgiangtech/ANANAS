import todoCart from './cartReducer';
import todoWishList from './wishListReducer';
import {combineReducers} from 'redux';
import user from './userReducer';
const ShopApp = combineReducers({
  _todoProduct: todoCart,
  _todoWishList: todoWishList,
  _user: user,
});
export default ShopApp;
