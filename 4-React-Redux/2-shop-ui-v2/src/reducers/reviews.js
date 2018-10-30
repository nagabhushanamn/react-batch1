
import { LOAD_REVIEWS_SUCCESS, SUBMIT_NEW_REVIEW } from '../constants'

export function reviewsReducer(state = {}, action) {
    console.log('reviews reducer..');
    let { productId } = action;
    let existingReviews = state[productId] || []
    switch (action.type) {
        case LOAD_REVIEWS_SUCCESS: {
            let { productId, reviews } = action;
            let newReviews = [...existingReviews, ...reviews]
            return Object.assign({}, state, { [productId]: newReviews })
        }
        case SUBMIT_NEW_REVIEW: {
            let { newReview } = action;
            let newReviews = existingReviews.concat(newReview)
            return Object.assign({}, state, { [productId]: newReviews })
        }
        default: return state;
    }
}