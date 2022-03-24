import React from 'react';

import { BlankInput } from './styles';

function NameInput() {
  return(
    <BlankInput>
      <p className='thead'>이름</p>
      <input type='text' placeholder='성함을 입력해주세요.' />
    </BlankInput>
  )
}

export default NameInput;