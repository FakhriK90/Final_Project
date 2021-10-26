import {
  LOADING_AUTH,
  LOGGIN_SUCCESS,
  LOGGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CURRENT_USER,
  CURRENT_FAIL,
  LOGOUT_USER,
} from "../constants/actionTypes";

import axios from "axios";


//Signup
export const registerUser = (newUser,history) => async (dispatch) => {
  dispatch({type: LOADING_AUTH});
  try {
    const response = await axios.post('/user/signup', newUser)
    dispatch({type:SIGNUP_SUCCESS, payload: response.data})
    history.push('/loggin')
  } catch (error) {
    console.dir(error)
    dispatch({type:SIGNUP_FAIL, payload:error})
  }
};


//Signin
export const loginUser = (detailUser,history) => async(dispatch) => {
  dispatch({type:LOADING_AUTH})
  try {
    const response = await axios.post('/user/signin', detailUser)
    dispatch({type:LOGGIN_SUCCESS, payload: response.data});
    history.push('/')
  } catch (error) {
    console.dir(error)
    dispatch({type:LOGGIN_FAIL, payload:error})
  }
};


//User auth
export const currentUser=()=>async dispatch=>{
  dispatch({type:LOADING_AUTH})
  try {
    const opts={
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }
    const response = await axios.get('/user/currentUser',opts)
    dispatch({type:CURRENT_USER, payload:response.data.user})
  } catch (error) {
    console.dir(error)
    dispatch({type:CURRENT_FAIL, payload:error})
  }
};

//logout
export const logout=()=>dispatch=>{
  dispatch({type:LOGOUT_USER})
}