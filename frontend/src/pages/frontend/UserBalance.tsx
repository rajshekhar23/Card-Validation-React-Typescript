import { addBalanceRequest } from 'actions/balance-actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "reactstrap";
import CardForm from './CardForm';
import CustomModal from './CustomModal';

type Props = {
    balance: number;
}

const UserBalance = (props: Props) => {
  
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);

  const addCharge = () => {
    dispatch(addBalanceRequest());
    setTimeout(() => {
      setIsModalActive(false);
    }, 3000); 
  }

  const handleModal = () => {
    setIsModalActive(true);
  } 

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        Current Balance : {props.balance}
        <Button color='warning' onClick={handleModal}>Recharge/Add Balance</Button>
        { isModalActive && <CustomModal isActive={isModalActive}>
            <CardForm addCharge={addCharge}/>
          </CustomModal>
         }
    </div>
  );
};


export default UserBalance;
