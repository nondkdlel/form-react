import React from 'react';
import styled from 'styled-components';

// import { UseContext } from '../context/index';

const DoneInput = styled.input`
  width: 100%;
  font-size: 17px;
  padding: 14px 0;
  border: 1px solid yellowgreen;
  background-color: yellowgreen;
  color: #fff;
  margin-top: 30px;
  border-radius: 4px;
  font-weight: 600;
`

function SubmitButton() {
  // const { name, email, pw, confirmPw, phone } = useContext(UseContext);
  return (
    <>
    <DoneInput type='button' value='확인' />
    </>
  )
}

export default SubmitButton;