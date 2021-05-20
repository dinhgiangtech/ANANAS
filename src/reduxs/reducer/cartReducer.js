import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  INITIAL_CART,
} from '../actions';

const initProduct = {
  numberCart: 0,
  Carts: [],
};

export default function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          status: action.payload.price,
          size: action.payload.size,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            status: action.payload.price,
            size: action.payload.size,
            description: action.payload.description,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      if (action.payload.quantity >= 1 && action.payload.quantity < 10) {
        return {
          ...state,
          numberCart: state.numberCart + 1,
          Carts: state.Carts.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
        };
      }
    case DECREASE_QUANTITY:
      let quantity = action.payload.quantity;
      if (quantity >= 1) {
        return {
          ...state,
          numberCart: state.numberCart - 1,
          Carts: state.Carts.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          Carts: state.Carts.filter(item => {
            return item.id != action.payload.id;
          }),
        };
      }

    case DELETE_CART:
      let quantity_ = action.payload.quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
          return item.id != action.payload.id;
        }),
      };
    case INITIAL_CART:
      return {
        numberCart: action.payload.numberCart,
        Carts: action.payload.Carts,
      };
    default:
      return state;
  }
}
