import React from 'react';
import Page from 'components/Page';
import UserBalance from './UserBalance';
import { useSelector } from "react-redux";
import { BalanceState } from '../../reducers/balanceReducer';

import "bootstrap/dist/css/bootstrap.min.css";

const FrontEndPage = () => {
  
  const state = useSelector((state: BalanceState) => state);    

  return (
    <Page heading="Front End Application">
      <UserBalance balance={state.balance} />
    </Page>
  );
};

export default FrontEndPage;
