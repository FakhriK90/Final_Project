import {
  LOADING_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_ONE_PRODUCT,
  LOADING_PRODUCT
} from "../constants/actionTypesAdminProducts";

const initialState = {
  products: [],
  isLoading: false,
  errors: null,
  product:{}
};

export const productsAdminReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case LOADING_PRODUCTS:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, isLoading: false, errors: payload };
      case GET_ONE_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
