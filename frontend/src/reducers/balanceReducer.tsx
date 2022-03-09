import { balanceActionTypes } from "actions/action-types";

export interface BalanceState {
    pending: boolean;
    balance: number;
    error: null;
    success: string;
  }
  
  const initialState: BalanceState = {
    pending: false,
    balance: 0,
    error: null,
    success: ''
  };
  
  export type Action = { type: string; payload: any };
  
  const reducer =  (
    state: BalanceState = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case balanceActionTypes.AddBalanceRequest: 
        return { ...state, pending: true };
      case balanceActionTypes.AddBalanceSuccess: 
        return { ...state, pending: false, balance: action.payload.balance, error: null, success: 'Successfully Charged' }      
      case balanceActionTypes.AddBalanceFailure: 
        return { ...state, pending: false, balance: 0, error: action.payload.error };  
      default:
        return state;
    }
  };
  
  export default reducer;
  