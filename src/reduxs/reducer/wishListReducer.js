import {INITIAL_WISH_LIST, ADD_WISH_LIST, DELETE_WISH_LIST} from '../actions';

const initProduct = {
  numberWish: 0,
  List: [],
};

export default function todoWishList(state = initProduct, action) {
  switch (action.type) {
    case ADD_WISH_LIST:
      let wish = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
        status: action.payload.status,
        size: action.payload.size,
        description: action.payload.description,
      };
      state.List.push(wish);

      return {
        ...state,
        numberWish: state.numberWish + 1,
      };
    case DELETE_WISH_LIST:
      return {
        ...state,
        numberWish: state.numberWish - 1,
        List: state.List.filter(item => {
          return item.id != action.payload.id;
        }),
      };
    case INITIAL_WISH_LIST:
      return {
        numberWish: action.payload.numberWish,
        List: action.payload.List,
      };
    default:
      return state;
  }
}
