import {
    LOADING_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
  } from "../constants/actionTypesUsers";
  
  const initialState={
      users:[],
      errors:null,
      isLoaging:false
  };

export const manageUsersReducer=(state=initialState,{type,payload}) => {
    switch (type) {
        case LOADING_USERS:
            return {...state, isLoaging:true}
            case GET_USERS_SUCCESS:
                return {...state, isLoaging:false,users:payload}
                case GET_USERS_FAIL:
                    return{...state,isLoaging:false, errors:payload}
        default:
            return state;
    }
}