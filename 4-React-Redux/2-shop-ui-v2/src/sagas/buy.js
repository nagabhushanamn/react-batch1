
import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

// Our worker Saga: will perform the async buy task
export function* buyAsync(item) {
    yield delay(2000) // e.g API call to store item server-side cart ( e,f Redis )
    yield put({ type: 'BUY_ASYNC', item })
}


// Our watcher Saga: spawn a new watchBuyAsync task
export function* watchBuyAsync() {
    yield takeLatest('BUY', buyAsync)
}