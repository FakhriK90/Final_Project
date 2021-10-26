import {
    LOADING_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    DELETE_USER,
  } from "../constants/actionTypesUsers";
  import axios from "axios";
  
  
  export const getUsres= () => async (dispatch) => {
      dispatch({type:LOADING_USERS});
      try {
        const opts={
            headers:{
              Authorization:localStorage.getItem('token')
            }
          }
          const reponse = await axios.get('/usersmanage/users',opts)
          dispatch({type:GET_USERS_SUCCESS, payload:reponse.data.users})
      } catch (error) {
          console.log(error)
          dispatch({type:GET_USERS_FAIL, payload:error})
      }
  }
  
  export const deleteUser = (_id) => async (dispatch) =>{
      try {
          const response = await axios.delete(`/usersmanage/manageusers/${_id}`)
          dispatch({type:DELETE_USER})
          dispatch(getUsres())
      } catch (error) {
          console.log(error)
      }
  }