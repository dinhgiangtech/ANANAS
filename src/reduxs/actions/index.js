export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const INITIAL_CART = 'INITIAL_CART';
export const ADD_WISH_LIST = 'ADD_WISH_LIST';
export const DELETE_WISH_LIST = 'DELETE_WISH_LIST';
export const INITIAL_WISH_LIST = 'INITIAL_WISH_LIST';
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT = 'LOG_OUT';
export const DELETE_ALL_CART = 'DELETE_ALL_CART';

export function GetNumberCart() {
  return {
    type: 'GET_NUMBER_CART',
  };
}
export function AddCart(payload) {
  return {
    type: 'ADD_CART',
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: 'UPDATE_CART',
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: 'DELETE_CART',
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  };
}
export function InitialCart(payload) {
  return {
    type: 'INITIAL_CART',
    payload,
  };
}
export function AddWhishList(payload) {
  return {
    type: 'ADD_WISH_LIST',
    payload,
  };
}
export function DeleteWhishList(payload) {
  return {
    type: 'DELETE_WISH_LIST',
    payload,
  };
}
export function InitialWishList(payload) {
  return {
    type: 'INITIAL_WISH_LIST',
    payload,
  };
}
export function LoginUser(payload) {
  return {
    type: 'LOGIN_USER',
    payload,
  };
}
export function LogOut() {
  return {
    type: 'LOG_OUT',
  };
}
export function DeleteAllCart() {
  return {
    type: 'DELETE_ALL_CART',
  };
}
