
import { NETWORK_REQUEST_BEGIN, NETWORK_REQUEST_SUCCESS } from '../constants'

export function statusReducer(state = {}, action) {
    switch (action.type) {
        case NETWORK_REQUEST_BEGIN:
        case NETWORK_REQUEST_SUCCESS:
        case 'NETWORK_REQUEST_FAILED':
            {
                return { ...state, ...action }
            }
        default:
            return state;
    }
}