import React, { useState } from 'react';

import { BlankInput } from './styles';

function PwInput() {
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const onChange = (e) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    
    if (!reg.test(e.target.value)) {
      setError('비밀번호 형식과 일치하지 않습니다.');
    } else {
      setError('');
    }
    return setPassword(e.target.value);
  }
  return (
    <BlankInput>
      <p className='thead'>비밀번호</p>
      <input 
        type='password' 
        placeholder='비밀번호를 입력해주세요.' 
        value={password}
        onChange={onChange}
      />
      <p className='alert'>{error}</p>
    </BlankInput>
  )
}

export default PwInput;