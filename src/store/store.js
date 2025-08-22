import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'

import {
  productListReducer,
  productDetailReducer,
} from '../reducer/productReducer'

import { cartReducer } from '../reducer/CartReducer'

import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
}

const middleware = [thunk]

const store = legacy_createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
