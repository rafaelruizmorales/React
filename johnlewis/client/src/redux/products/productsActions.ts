import axios from "axios"

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "./productsTypes"

import { products } from './model'


export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = (products: products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (error: string) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  return async (dispatch: any) => {
    dispatch(fetchProductsRequest)
    
    try {
      const response = await axios.get('http://localhost:5000/products')
      
      const products = response.data
        dispatch(fetchProductsSuccess(products))
    } catch(error) {
      dispatch(fetchProductsFailure(error.message))
    }
  }
}