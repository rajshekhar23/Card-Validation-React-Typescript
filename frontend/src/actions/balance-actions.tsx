import { balanceActionTypes } from "./action-types";

type Action = {
    type: string;
    payload?: any;
}

export const fetchBalanceRequest = (): Action => ({
    type: balanceActionTypes.FetchBalanceRequest
});

export const fetchBalanceSuccess = (payload: any): Action => ({
    type: balanceActionTypes.FetchBalanceSuccess,
    payload
});

export const fetchBalanceFailure = (payload: any): Action => ({
    type: balanceActionTypes.FetchBalanceFailure,
    payload
});


export const addBalanceRequest = (): Action => ({
    type: balanceActionTypes.AddBalanceRequest
});

export const addBalanceSuccess = (payload: any): Action => ({
    type: balanceActionTypes.AddBalanceSuccess,
    payload
});

export const addBalanceFailure = (payload: any): Action => ({
    type: balanceActionTypes.AddBalanceFailure,
    payload
});
