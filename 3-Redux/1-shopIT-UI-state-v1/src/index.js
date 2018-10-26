console.log('-inde.js-');

import 'bootstrap/dist/css/bootstrap.css'
import { combineReducers, createStore } from 'redux'
import { Map } from 'immutable'


//------------------------------------------------------
// step-1 : define action(s)
//------------------------------------------------------

const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS"
const LOAD_REVIEWS_SUCCESS = "LOAD_REVIEWS";
const SUBMIT_NEW_REVIEW = "SUBMIT_NEW_REVIEW"
const BUY = "BUY"
const CHECKOUT = "CHECKOUT"

//------------------------------------------------------
// step-2 : create action(s)
//------------------------------------------------------
function loadProducts(size) {
    // api call
    let products = [
        { id: 111, name: 'Laptop', price: 19800, description: 'New Mac pro' },
        { id: 222, name: 'Mobile', price: 1800, description: 'New  pro' }
    ];

    return { type: LOAD_PRODUCTS_SUCCESS, products }

}

function loadReviews(productId) {
    // api call
    let reviews = [
        { stars: 5, author: 'who@email.com', body: 'sample review-1' },
        { stars: 1, author: 'who@email.com', body: 'sample review-2' }
    ];
    return { type: LOAD_REVIEWS_SUCCESS, reviews, productId }
}

function buy(item, qty) {
    return { type: BUY, item, qty }
}

//------------------------------------------------------
// step-3 : create reducer(s)
//------------------------------------------------------
function productsReducer(state = [], action) {
    console.log('products reducer..');
    switch (action.type) {
        case LOAD_PRODUCTS_SUCCESS: return [...state, ...action.products]
        default: return state;
    }
}

/*

    {
        111:[

        ],
        222:{

        }
    }

*/

function reviewsReducer(state = {}, action) {
    console.log('reviews reducer..');
    switch (action.type) {
        case LOAD_REVIEWS_SUCCESS: {
            let { productId, reviews } = action;
            let existingReviews = state[productId] || []
            let newReviews = [...existingReviews, ...reviews]
            return Object.assign({}, state, { [productId]: newReviews })
        }
        default: return state;
    }
}

function cartReducer(state = [], action) {
    console.log('cart reducer..');
    switch (action.type) {
        case BUY: return [...state, action.item]
        default: return state
    }
}

//------------------------------------------------------

const rootreducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});

//------------------------------------------------------


//------------------------------------------------------
// step-4 : create store
//------------------------------------------------------

const initialState = {
    products: [
        { id: "000", name: 'sample-item', price: 0.0, description: '...' }
    ],
    reviews: {
        111: [
            { stars: 0, author: "anony", body: '' }
        ]
    },
    cart: []
};

const store = createStore(rootreducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//------------------------------------------------------


//------------------------------------------------------
// View Libray ==> plain-js | jquery | NG | React 
//------------------------------------------------------

let loadProductsBtn = document.getElementById('load-products');
loadProductsBtn.addEventListener('click', e => {
    let action = loadProducts(2);
    console.log('dispatching LOAD_PRODUCT_SUCCESS action to store');
    store.dispatch(action);
});

let loadReviewsBtnForLap = document.getElementById('load-reviews-lap');
let loadReviewsBtnFromMob = document.getElementById('load-reviews-mob');

loadReviewsBtnForLap.addEventListener('click', e => {
    let action = loadReviews(111)
    console.log('dispatching LOAD_REVIEWS_SUCCESS action to store');
    store.dispatch(action);

})
loadReviewsBtnFromMob.addEventListener('click', e => {
    let action = loadReviews(222)
    console.log('dispatching LOAD_REVIEWS_SUCCESS action to store');
    store.dispatch(action);
})

let buyLapBtn = document.getElementById("buy-lap")
buyLapBtn.addEventListener('click', e => {
    let action = buy({ id: 111, name: 'laptop', price: 100 })
    console.log('dispatching BUY action to store');
    store.dispatch(action);
})


// ----------------------------------------------------
// ProductList View component
// ----------------------------------------------------
store.subscribe(() => {
    console.log('ProductList View subscribing state');
    let state = store.getState();
    let { products } = state;
    console.log(products);
});




// ----------------------------------------------------
// Product View component
// ----------------------------------------------------
store.subscribe(() => {
    console.log('Product View subscribing state');
    let state = store.getState();
    let { reviews } = state;
    console.log(reviews);
});




// ----------------------------------------------------
// CartBadge View component
// ----------------------------------------------------
store.subscribe(() => {
    console.log('CartBadge View subscribing state');
    let state = store.getState();
    let { cart } = state;
    console.log(cart.length);
});

