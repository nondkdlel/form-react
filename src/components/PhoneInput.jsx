import React from 'react';

import { BlankInput } from './styles';

function PhoneInput() {
  return (
    <BlankInput>
      <p className='thead'>휴대폰 번호</p>
      <input type='tel' placeholder='하이픈(-) 제외 입력' />
    </BlankInput>
  )
}

export default PhoneInput;