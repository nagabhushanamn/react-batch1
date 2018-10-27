

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';


const preLoadedState = {
    products: [],
    reviews: {},
    cart: []
};

let middleware = [ReduxThunk];

// const store = createStore(rootreducer, preLoadedState, applyMiddleware(...middleware));
// export default store;


// in dev, to connect store with dev-tools

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, preLoadedState, composeEnhancers(
    applyMiddleware(...middleware),
));
export default store;
