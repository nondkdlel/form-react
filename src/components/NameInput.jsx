import React, { useState } from 'react';

import { BlankInput } from './styles';

export const UserDispatch = React.createContext('');

function NameInput() {

  const [userName, setUserName] = useState('');
  const [ error, setError ] = useState('');
  const onChange = (e) => {
    const regName = /^[가-힣]+$/;
    if(!regName.test(e.target.value)) {
      setError('성함은 한글로 입력해주세요.')
    }else(
      setError('')
    )
    setUserName(e.target.value);
  }
  

  return(
    <UserDispatch.Provider value={userName}>
      <BlankInput>
        <p className='thead'>이름</p>
        <input
          type='text' 
          placeholder='성함을 입력해주세요.' 
          name="username"
          value={userName}
          onChange={onChange}
        />
        <p className='alert'>{error}</p>
      </BlankInput>
    </UserDispatch.Provider>
  )
}

export default NameInput;