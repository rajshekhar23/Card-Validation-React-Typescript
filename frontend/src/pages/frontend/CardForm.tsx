import styled from "styled-components";
import React, { ChangeEvent, useState } from "react";
import { Button } from "reactstrap";
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
import { useSelector } from "react-redux";
import { BalanceState } from "reducers/balanceReducer";

const valid = require("card-validator");

export const FormGroup = styled.div`
    display: block;
	width: 300px;
	margin: 25px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
    display: block;
`;


export const Input = styled.input`
	padding: 0.2em;
	border: 1px solid #ccc;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

interface MessageProps  {
  color?: string;
}

export const Message = styled.label<MessageProps>`
	margin-bottom: 0.5em;
    display: block;
    color: ${props => props.color || "red"};
`;

type Props = {
  addCharge: () => void
}

const CardForm = (props: Props) => {

   const balanceState = useSelector((state: BalanceState) => state);

   const [error, setError] = useState({
      cvv: '',
      expiry: '',
      name: '',
      number: '',
      valid: false
    });

  const [formData, setFormData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
 
  const handleInputFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, focus: e.target.name });
  }
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let isValid = true;
    if(name === 'number' && !valid.number(value).isValid) {
      isValid = false;
      setError( {...error, number: 'Invalid Card Number', valid: false});      
    } 
    if(name === 'expiry') {
      if(!valid.expirationMonth(value.split("/")[0]).isValid) {
        isValid = false;
        setError( {...error, expiry: 'Invalid Card Expiry Month', valid: false});
      } 
      if(!valid.expirationYear(value.split("/")[1]).isValid) {
        isValid = false;
        setError( {...error, expiry: 'Invalid Card Expiry Year', valid: false});
      } 
    }
    if(name === 'cvv' && !valid.cvv(value,3).isValid) {
      isValid = false;
      setError( {...error, cvv: 'Invalid CVV Number', valid: false});      
    } 
    if(name === 'name' && !valid.cardholderName(value).isValid) {
      isValid = false;
      setError( {...error, name: 'Invalid Card Holder Name', valid: false});      
    }     
    if(isValid) {
        setError( {expiry: '', name: '', number: '', cvv: '', valid: isValid});      
    }
    setFormData({ ...formData, [name]: value });
  }
  
  return (<div>
      <h5>Payment Card Details</h5>
      <div id="PaymentForm">
        <Cards
          cvc={formData.cvc}
          expiry={formData.expiry}
          name={formData.name}
          number={formData.number}
        />
        <FormGroup>
          <Label>Card Number</Label>
          <Input id="card-number" type="tel"
            name="number"
            onChange={(event) => handleInputChange(event)}
            placeholder="16 digit no. e.g 5551 2229 2229 2349"
            onFocus={(event) => handleInputFocus(event)} />
          { error && error.number !== '' && <Message>{error.number}</Message>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="label">Expiry</Label>
          <Input id="card-expiry" name="expiry" type="tel"
          placeholder="Enter expiry month/year e.g 12/2022"
          onChange={(event) => handleInputChange(event)}
          onFocus={(event) => handleInputFocus(event)} />
          { error.expiry !== '' && <Message>{error.expiry}</Message>}
        </FormGroup>
        <FormGroup>
          <Label>Card CVV</Label>
          <Input id="card-cvv" name="cvv" type="tel" 
          placeholder="Enter card cvv e.g 345"
          value={129}
          onChange={(event) => handleInputChange(event)}
          onFocus={(event) => handleInputFocus(event)}/>
          { error.cvv !== '' && <Message>{error.cvv}</Message>}
        </FormGroup>
        <FormGroup>
          <Label>Your Name</Label>
          <Input id="card-name" name="name" 
          placeholder="Enter card holder name"
          value="raj"
          onChange={(event) => handleInputChange(event)}
          onFocus={(event) => handleInputFocus(event)}/>
          { error.name !== '' && <Message>{error.name}</Message>}
        </FormGroup>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <Button color="success" disabled={!error.valid} onClick={props.addCharge}>Charge 10$</Button>
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <Message color="green">{balanceState.success}</Message>
          </div>
        </div>
  </div>)
}

export default CardForm;
