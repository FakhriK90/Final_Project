import {
  LOADING_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_ONE_PRODUCT
} from "../constants/actionTypesAdminProducts";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const response = await axios.get("/product/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data.products });
  } catch (error) {
    console.dir(error);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

export const getProduct =(_id)=>async (dispatch) => {
  
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const response = await axios.get(`/product/products/${_id}`)
    console.log(response.data)
    dispatch({type:GET_ONE_PRODUCT, payload:response.data})
  } catch (error) {
    console.dir(error);
  }
};

export const addProducts = (newProduct, history) => async (dispatch) => {
  try {
    const opts={
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }
    const response = await axios.post("/product/manageprod", newProduct, opts);
    history.push("/adminproduct");
    dispatch(getProducts());
  } catch (error) {
    console.dir(error);
  }
};

export const updateProduct = (product,_id,history) => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const response = await axios.put(`/product/manageprod/${_id}`, product);
    dispatch({ type: UPDATE_PRODUCTS, payload: response.data.products });
    history.push("/adminproduct");
      dispatch(getProducts());
  } catch (error) {
    console.dir(error);
  }
};

export const deleteProduct = (_id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/product/manageprod/prod/${_id}`);
    dispatch({ type: DELETE_PRODUCTS });
    dispatch(getProducts());
  } catch (error) {
    console.dir(error);
  }
};