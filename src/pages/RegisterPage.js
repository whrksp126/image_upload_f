import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
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
      <from>
        <CustomInput label="이름" value={name} setValue={setName} />
        <CustomInput label="회원ID" value={userName} setValue={setUserName} />
        <CustomInput label="비밀번호" value={password} setValue={setPassword} type="password" />
        <CustomInput label="비밀번호 확인" value={passwordCheck} setValue={setPasswordCheck} type="password" />
      </from>
    </div>
  )
}

export default RegisterPage