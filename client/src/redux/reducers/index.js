import { combineReducers } from 'redux'
import {authReducer} from './authReducer'
import {productsAdminReducer} from './productsAdminReducer'
import {manageUsersReducer} from './manageUsersReducer'
import {cartReducer} from './cartUser'
import {profileReducer} from './userProfile'

export const rootReducer = combineReducers({authReducer, productsAdminReducer,manageUsersReducer,cartReducer,profileReducer})