

import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';
import { statusReducer } from './network-status';


const rootreducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status:statusReducer
});

export default rootreducer;