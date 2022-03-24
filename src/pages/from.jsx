import React from 'react';
import styled from 'styled-components';

import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import PwInput from '../components/PwInput';
import ConfirmPwInput from '../components/ConfirmPwInput';
import PhoneInput from '../components/PhoneInput';
import SubmitButton from '../components/SubmitButton';

const InfoForm = styled.form`
  
  max-width: 480px;
  width: 100%;
  margin: 100px auto;

  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 60px;
  }
`

function Form() {
  return(
    <InfoForm>
      <h1>회원 정보 입력 폼</h1>
      <NameInput />
      <EmailInput />
      <PwInput />
      <ConfirmPwInput />
      <PhoneInput />
      <SubmitButton />
    </InfoForm>
  )
}
export default Form;