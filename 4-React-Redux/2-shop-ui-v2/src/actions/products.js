

import { NETWORK_REQUEST_BEGIN, NETWORK_REQUEST_SUCCESS, LOAD_PRODUCTS_SUCCESS } from '../constants'

export function loadProducts(size) {
    return function (dispatch) {
        dispatch({ type: NETWORK_REQUEST_BEGIN, message: 'Loading products' }) // before request
        let api = "http://localhost:8080/api/products";
        fetch(api)
            .then(response => response.json())
            .then(products => {
                setTimeout(() => {
                    dispatch({ type: NETWORK_REQUEST_SUCCESS, message: '' }) // after success
                    dispatch({ type: LOAD_PRODUCTS_SUCCESS, products })
                }, 2000)
            })
            .catch(error => {
                dispatch({ type: 'NETWORK_REQUEST_FAILED', message: 'Oops, not able to  api server' }) // after success
            })

    }
}

