

import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';


const rootreducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});

export default rootreducer;