

import {LOAD_PRODUCTS_SUCCESS} from '../constants'

export function loadProducts(size) {
    return function (dispatch) {
        let api = "http://localhost:8080/api/products";
        fetch(api)
            .then(response => response.json())
            .then(products => {
                setTimeout(() => {
                    dispatch({ type: LOAD_PRODUCTS_SUCCESS, products })
                }, 3000)
            })
    }
}

