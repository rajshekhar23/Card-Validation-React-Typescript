import { all, call, put, takeLatest } from 'redux-saga/effects';
import { addBalanceFailure, addBalanceSuccess, fetchBalanceFailure, fetchBalanceSuccess } from 'actions/balance-actions';
import { balanceActionTypes } from 'actions/action-types';
import FrontEndAPI from 'services/FrontEndAPI';
import { IBalance } from 'model/balance-model';

function* fetchBalanceSaga() {
    try {
        const {balance}: IBalance = yield call(FrontEndAPI.getUserBalance);
        yield put(fetchBalanceSuccess(balance || 0 ))
    } catch (e: any) {
        yield put(fetchBalanceFailure({error: e.message}))
    }
}

function* addBalanceSaga() {
    try {
        const payload: IBalance = yield call(FrontEndAPI.addCharge);
        yield put(addBalanceSuccess(payload))
    } catch (e: any) {
        yield put(addBalanceFailure({error: e.message}))
    }
}

function* balanceSaga() {
    yield all([
        takeLatest(balanceActionTypes.FetchBalanceRequest, fetchBalanceSaga),
        takeLatest(balanceActionTypes.AddBalanceRequest, addBalanceSaga)
    ]);
}

export default balanceSaga;
