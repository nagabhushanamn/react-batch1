
import { LOAD_REVIEWS_SUCCESS, SUBMIT_NEW_REVIEW } from '../constants'

export function loadReviews(productId) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews, productId })
            })
    }
}


export function submitNewReview(review, productId) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(api,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review)
            })
            .then(response => response.json())
            .then(rev => {
                dispatch({ type: SUBMIT_NEW_REVIEW, newReview: rev, productId })
            })
    }
}