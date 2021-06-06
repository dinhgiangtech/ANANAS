import {LOGIN_USER, LOG_OUT} from '../actions';

const initUser = {
  email: '',
  uid: '',
};

export default function user(state = initUser, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    case LOG_OUT:
      return {
        ...state,
        email: '',
        uid: '',
      };

    default:
      return state;
  }
}
