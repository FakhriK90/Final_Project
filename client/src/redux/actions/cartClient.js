import {
  LOADING_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAIL,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL
} from "../constants/actionTypesCart";
import axios from "axios";

//Add to cart
export const addToCart = (_id, productId, quantity) => async (dispatch) => {
  dispatch({ type: LOADING_CART });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.post(
      `/usercart/cart/${_id}`,
      { productId, quantity },
      opts
    );
    dispatch({ type: ADD_CART_SUCCESS, payload: res.data.cart });
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADD_CART_FAIL, payload: error });
  }
};

//Get cart
export const getCart = (_id) => async (dispatch) => {
  dispatch({ type: LOADING_CART });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`/usercart/cart/${_id}`, opts);
    dispatch({ type: GET_CART_SUCCESS, payload: res.data.cart });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error });
  }
};

// edit cart
export const editCart =(_id, productId,quantity) => async (dispatch)=>{
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.put(`/usercart/cart/edit/${_id}`, {productId,quantity},opts)
    dispatch({type:EDIT_CART_SUCCESS, payload:res.data})
  } catch (error) {
    dispatch({type:EDIT_CART_FAIL,payload:error})
  }
}

// Delete item from cart

export const deleteItem = (userId,productId) => async(dispatch)=>{
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.delete(`/usercart/cart/delete/${userId}/${productId}`,opts)
    dispatch({type:DELETE_ITEM_SUCCESS,payload:res.data})
  } catch (error) {
    dispatch({type:DELETE_ITEM_FAIL, payload:error})
  }
}