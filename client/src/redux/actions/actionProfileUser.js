import {LOADING_PROFILE,GET_PROFILE_SUCCESS,GET_PROFILE_FAIL} from '../constants/actionTypesProfile';
import {
  LOADING_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} from "../constants/actionTypesCart";
import axios from 'axios'

export const getUserInfo = () => async (dispatch) =>{
    dispatch ({type:LOADING_PROFILE})
    try {
        const opts={
            headers:{
              Authorization:localStorage.getItem('token')
            }
          }
        const response = await axios.get(`/usercart/profile/`,opts)
        console.log(response)
        dispatch({type:GET_PROFILE_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:GET_PROFILE_FAIL, error})
    }
}

