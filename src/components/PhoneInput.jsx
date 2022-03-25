import React, { useContext } from 'react';

import { BlankInput } from './styles';
import { UseContext } from '../context/index';

function PhoneInput() {
  
  const { phone, onInputPhone } = useContext(UseContext);

  return (
    <BlankInput>
      <p className='thead'>휴대폰 번호</p>
      <input 
        type='tel' 
        placeholder='하이픈(-) 제외 입력' 
        maxLength='11'
        value={phone}
        onInput={onInputPhone}
      />
    </BlankInput>
  )
}

export default PhoneInput;