import { all, fork } from 'redux-saga/effects';
import balanceSaga from './balanceSaga';

export function* rootSaga() {
    yield all([fork(balanceSaga)]);
}
