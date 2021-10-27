import {LOADING_PROFILE,GET_PROFILE_SUCCESS,GET_PROFILE_FAIL} from '../constants/actionTypesProfile'

const initialState = {
    user:[],
    errors:null,
    isloading:false
}

export const profileReducer =(
    state = initialState,
    { type, payload }
  ) => {
      switch (type) {
          case LOADING_PROFILE:
              return {...state, isloading:true}
              case GET_PROFILE_SUCCESS:
                  return{...state, isloading:false, user:payload}
                  case GET_PROFILE_FAIL:
                      return {...state, isloading:false, errors:payload}
          default:
              return state;
      }
  }