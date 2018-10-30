
import { LOAD_PRODUCTS_SUCCESS } from '../constants'

export function productsReducer(state = [], action) {
    console.log('products reducer..');
    switch (action.type) {
        case LOAD_PRODUCTS_SUCCESS: return [...state, ...action.products]
        default: return state;
    }
}
