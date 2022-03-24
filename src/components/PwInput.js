import React from 'react';

import { BlankInput } from './styles';

function PwInput() {
  return (
    <BlankInput>
      <p className='thead'>비밀번호</p>
      <input type='text' placeholder='비밀번호를 입력해주세요.' />
    </BlankInput>
  )
}

export default PwInput;