import {
  LOADING_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
} from "../constants/actionTypesCart";

const initialState = {
  cart: [],
  isLoading: false,
  errors: null,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_CART:
      return { ...state, isLoading: true };
    case ADD_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case ADD_CART_FAIL:
      return { ...state, isLoading: false, errors: payload };
    case GET_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
    case GET_CART_FAIL:
      return { ...state, isLoading: false, errors: payload };
    default:
      return state;
  }
};
