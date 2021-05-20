import {INITIAL_WISH_LIST, ADD_WISH_LIST, DELETE_WISH_LIST} from '../actions';

const initProduct = {
  numberWish: 0,
  List: [],
};

export default function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case ADD_WISH_LIST:
      let wish = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
        status: action.payload.price,
        size: action.payload.size,
      };
      state.List.push(wish);

      return {
        ...state,
        numberWish: state.numberWish + 1,
      };

    case DELETE_WISH_LIST:
      return {
        ...state,
        numberWhish: state.numberCart - 1,
        List: state.List.filter(item => {
          return item.id != action.payload.id;
        }),
      };
    case INITIAL_WISH_LIST:
      return {
        ...state,
        numberWhish: action.payload.numberCart,
        List: action.payload.Carts,
      };
    default:
      return state;
  }
}
