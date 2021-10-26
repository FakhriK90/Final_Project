import {
  LOADING_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} from "../constants/actionTypesCart";
import axios from "axios";

export const addCart = (newCart) => async (dispatch) => {
  dispatch({ type:LOADING_CART });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const reponse = await axios.post(`/usercart/addcart`,newCart, opts );
    dispatch({ type: ADD_CART_SUCCESS, payload: reponse.data.user.cart });
    console.log()
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_CART_FAIL, payload: error });
  }
};
