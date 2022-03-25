import React, { useState } from 'react';

import { BlankInput } from './styles';

function EmailInput() {
  
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState('');
  
  const onChange = (e) => {
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regEmail.test(e.target.value)) {
      setError('이메일 형식에 맞지 않습니다.');
    } else {
      setError('');
    }
    setEmail(e.target.value);
  }
  
  return (
    <BlankInput>
      <p className='thead'>이메일</p>
      <input 
        type='text' 
        placeholder='이메일 형식에 맞게 입력해주세요.' 
        value={email}
        onChange={onChange}
      />
      <p className='alert'>{error}</p>
    </BlankInput>
  )
}

export default EmailInput;