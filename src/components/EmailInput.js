import React from 'react';

import { BlankInput } from './styles';

function EmailInput() {
  return (
    <BlankInput>
      <p className='thead'>이메일</p>
      <input type='text' placeholder='이메일 형식에 맞게 입력해주세요.' />
    </BlankInput>
  )
}

export default EmailInput;