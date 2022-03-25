import React, { useState } from 'react';
import { BlankInput } from './styles';

function PhoneInput() {
  const [ tel, setTel ] = useState('')
  const onInput = (e) => {
    setTel(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))
    // const check = /^(?:(010\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
    // if (!check.test(e.target.value)) {
    //   return setTel('')
    // }else {
    //   return setTel(e.target.value) 
    // }
  }

  return (
    <BlankInput>
      <p className='thead'>휴대폰 번호</p>
      <input 
        type='tel' 
        placeholder='하이픈(-) 제외 입력' 
        maxLength='11'
        value={tel}
        onInput={onInput}
      />
    </BlankInput>
  )
}

export default PhoneInput;