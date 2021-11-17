import{LOADING_CART,ADD_CART_SUCCESS,ADD_CART_FAIL, GET_CART_SUCCESS, GET_CART_FAIL} from '../constants/actionTypesCart';
import axios from 'axios';

//Add to cart
export const addToCart = (_id,productId,quantity) => async (dispatch) => {
    dispatch({type:LOADING_CART})
    try {
        const opts = {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          };
          const res = await axios.post(`/usercart/cart/${_id}`,{productId,quantity},opts)
          dispatch({type:ADD_CART_SUCCESS, payload:res.data.cart})
    } catch (error) {
      console.dir(error)
        dispatch({type:ADD_CART_FAIL,payload:error})
    }
}

//Get cart
export const getCart = (_id) => async (dispatch) =>{
  dispatch({type:LOADING_CART})
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const res = await axios.get(`/usercart/cart/${_id}`,opts)
    dispatch({type:GET_CART_SUCCESS, payload:res.data.cart})
  } catch (error) {
    dispatch({type:GET_CART_FAIL, payload:error})
  }
}