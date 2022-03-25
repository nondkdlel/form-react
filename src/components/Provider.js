import React, { useState } from 'react';
import { UseContext } from '../context/index';

const CommonProvider = ({children}) => {
  
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ confirmPw, setConfirmPw ] = useState('');
  const [ phone, setPhone ] = useState('');

  const [ nameError, setNameError ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ pwError, setPwError ] = useState('');
  const [ confirmError, setConfirmError ] = useState('');

  const onChangeName = (e) => {
    
    const regName = /^[가-힣]+$/;
    
    if (!regName.test(e.target.value)) {
      setNameError('성함은 한글로 입력해주세요.')
    } else (
      setNameError('')
    )

    setName(e.target.value);
  }
  const onChangeEmail = (e) => {
    
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    
    if(!regEmail.test(e.target.value)) {
      setEmailError('이메일 형식에 맞지 않습니다.');
    } else (
      setEmailError('')
    )

    setEmail(e.target.value);
  }
  const onChangePw = (e) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if(!reg.test(e.target.value)){
     setPwError('비밀번호 형식에 맞지 않습니다.') 
    } else {
      setPwError('') 
    }
    setPw(e.target.value);
  }
  const onChangeConfirmPw = (e) => {

     if(pw !== e.target.value) {
       setConfirmError('비밀번호가 일치하지 않습니다.')
     } else {
      setConfirmError('')
     }
    setConfirmPw(e.target.value);
  }
  const onInputPhone = (e) => {
    setPhone(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))
  }
  return (
    <UseContext.Provider value={
      { 
        name, 
        onChangeName, 
        nameError, 
        email,
        onChangeEmail,
        emailError,
        pw,
        onChangePw,
        pwError,
        confirmPw,
        onChangeConfirmPw,
        confirmError,
        phone,
        onInputPhone,
      }
    }>
      {children}
    </UseContext.Provider>
  )
}

export default CommonProvider;