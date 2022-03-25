import React, { useContext } from 'react';

import { BlankInput } from './styles';
import { UseContext } from '../context/index';

function ConfirmPwInput() {
  
  const { confirmPw, onChangeConfirmPw, confirmError } = useContext(UseContext);

  return (
    <BlankInput>
      <p className='thead'>비밀번호 확인</p>
      <input 
        type='password' 
        placeholder='비밀번호를 한번 더 입력해주세요.' 
        value={confirmPw}
        onChange={onChangeConfirmPw}
      />
      <p className='alert'>{confirmError}</p>
    </BlankInput>
  )
}

export default ConfirmPwInput;