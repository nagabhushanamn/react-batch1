

import { BUY } from '../constants'

export function cartReducer(state = [], action) {
    console.log('cart reducer..');
    switch (action.type) {
        case 'BUY_ASYNC': return [...state, action.item]
        default: return state
    }
}