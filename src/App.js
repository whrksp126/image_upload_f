import React from "react"
import UploadForm from "./components/UploadForm";
// npm i react-toastify (alert을 이쁘게 해주는 라이브러리)
import { ToastContainer } from 'react-toastify';
// toastify를 사용하기 위해 css를 import 해야함
import 'react-toastify/dist/ReactToastify.css';
import ImageList from "./components/ImageList";

const App = () => {
  return (
    <div style={{maxWidth: 600, margin:"auto"}}>
      {/* toastify를 전역에서 사용할 수 있게함 */}
      <ToastContainer />
      <h2>사진첩</h2>
      <UploadForm />
      <ImageList />
    </div>
  );
}

export default App;
