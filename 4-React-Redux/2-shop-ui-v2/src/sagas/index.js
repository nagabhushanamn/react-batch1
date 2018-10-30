
import { all } from 'redux-saga/effects'

import { watchBuyAsync } from './buy';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchBuyAsync()
    ])
}