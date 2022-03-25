import React, { useState } from 'react';

import { BlankInput } from './styles';

function ConfirmPwInput() {
  
  const [ confirmPw, setConfirmPw ] = useState('');
  const [ error, setError ] = useState('');
  const onChange = (e) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (!reg.test(e.target.value)) {
      setError('비밀번호 형식에 맞지 않습니다.');
    } else {
      setError('');
    }
    return setConfirmPw(e.target.value);
  }

  return (
    <BlankInput>
      <p className='thead'>비밀번호 확인</p>
      <input 
        type='password' 
        placeholder='비밀번호를 한번 더 입력해주세요.' 
        value={confirmPw}
        onChange={onChange}
      />
      <p className='alert'>{error}</p>
    </BlankInput>
  )
}

export default ConfirmPwInput;