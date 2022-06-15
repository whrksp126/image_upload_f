import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { toast } from 'react-toastify';
import axios from 'axios'

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if(userName.length < 3)
        throw new Error("회원ID가 너무 짧아요. 3자 이상으로 해주세요.")
      if(password.length < 6)
        throw new Error("비밀번호가 너무 짧아요. 6자 이상으로 해주세요.")
      if(password !== passwordCheck)
        throw new Error("비밀번호가 다릅니다.")
      const result = await axios.post("/users/register", {name, userName, password})
      console.log({result})
      toast.success("회원가입 성공");
    }catch(err) {
      console.error(err); 
      toast.error(err.message);
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
      <form onSubmit={submitHandler} >
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