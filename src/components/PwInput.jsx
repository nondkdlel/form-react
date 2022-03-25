import React, { useContext } from 'react';

import { BlankInput } from './styles';
import { UseContext } from '../context/index';

function PwInput() {
  const { pw, onChangePw, pwError } = useContext(UseContext);

  return (
    <BlankInput>
      <p className='thead'>비밀번호</p>
      <input 
        type='password' 
        placeholder='비밀번호를 입력해주세요.' 
        value={pw}
        onChange={onChangePw}
      />
      <p className='alert'>{pwError}</p>
    </BlankInput>
  )
}

export default PwInput;