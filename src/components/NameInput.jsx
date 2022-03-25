import React, { useContext } from 'react';

import { BlankInput } from './styles';
import { UseContext } from '../context/index';

function NameInput() {

  const {name , onChangeName, nameError } = useContext(UseContext);

  return(
    
      <BlankInput>
        <p className='thead'>이름</p>
        <input
          type='text' 
          placeholder='성함을 입력해주세요.' 
          name="username"
          value={name}
          onChange={onChangeName}
        />
        <p className='alert'>{nameError}</p>
      </BlankInput>
    
  )
}

export default NameInput;