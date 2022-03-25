import React, { useContext } from 'react';

import { BlankInput } from './styles';
import { UseContext } from '../context/index';

function EmailInput() {
  
  const { email, onChangeEmail, emailError } = useContext(UseContext);
  
  return (
    <BlankInput>
      <p className='thead'>이메일</p>
      <input 
        type='text' 
        placeholder='이메일 형식에 맞게 입력해주세요.' 
        value={email}
        onChange={onChangeEmail}
      />
      <p className='alert'>{emailError}</p>
    </BlankInput>
  )
}

export default EmailInput;