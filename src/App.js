import React from "react"
// npm i react-toastify (alert을 이쁘게 해주는 라이브러리)
import { ToastContainer } from 'react-toastify';
// toastify를 사용하기 위해 css를 import 해야함
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
// npm i react-router-dom (페이지를 만들기 위해서)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div style={{maxWidth: 600, margin:"auto"}}>
      {/* toastify를 전역에서 사용할 수 있게함 */}
      <ToastContainer />
        <Routes>
          {/* exact는 완전 동일한 url 일때만 해당 컴포넌트를 보여줘라는 의미 */}
          <Route path="/auth/register" exact element={<RegisterPage />} />
          <Route path="/auth/login" exact element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
    </div>
  );
}

export default App;
