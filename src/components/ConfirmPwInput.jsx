import React from 'react';

import { BlankInput } from './styles';

function ConfirmPwInput() {
  return (
    <BlankInput>
      <p className='thead'>비밀번호 확인</p>
      <input type='text' placeholder='비밀번호를 한번 더 입력해주세요.' />
    </BlankInput>
  )
}

export default ConfirmPwInput;