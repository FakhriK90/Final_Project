import {
  LOADING_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL
} from "../constants/actionTypesProfile";
import axios from "axios";

export const getUserInfo = () => async (dispatch) => {
  dispatch({ type: LOADING_PROFILE });
  try {
    const opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.get(`/usercart/profile/`, opts);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, error });
  }
};

export const updateProfile = (_id,newInfo,history) =>async (dispatch) => {
  try {
    const opts={
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }
    const response = await axios.put(`/usercart/edit/${_id}`,newInfo,opts)
    dispatch({type:EDIT_PROFILE_SUCCESS,payload:response.data})
    history.push('/profile')
    dispatch(getUserInfo())
  } catch (error) {
    dispatch({type:EDIT_PROFILE_FAIL,payload:error})
  }
}