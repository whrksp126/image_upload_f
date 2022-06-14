import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import { toast } from 'react-toastify'

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const submitHandler = (e) => {
    try{
      e.preventDefault();
      console.log({name, userName, password, passwordCheck})

    } catch(err){
      console.error(err);
      toast.err(err.message)
    }
  }
  return (
    <div
      style={{
        marginTop: 100,
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={submitHandler}>
        <CustomInput label="이름" value={name} setValue={setName} />
        <CustomInput label="회원ID" value={userName} setValue={setUserName} />
        <CustomInput label="비밀번호" value={password} setValue={setPassword} type="password" />
        <CustomInput label="비밀번호 확인" value={passwordCheck} setValue={setPasswordCheck} type="password" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default RegisterPage