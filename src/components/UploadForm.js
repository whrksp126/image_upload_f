import React, { useContext, useState } from 'react'
// npm i axios 페이지를 새로고침 하지 않고 일부 데이터 만을 통신할 수 있음
import axios from 'axios'
import { toast } from 'react-toastify';
import "./UploadForm.css"

import ProgressBar from './ProgressBar'
import { ImageContext } from '../context/ImageContext';

const UploadForm = () => {
  const [images, setImages] = useContext(ImageContext)
  const [file, setFile] = useState(null);
  // 불러온 이미지를 미리보기 하기 위해 imgSrc를 저장할 함수를 생성함
  const [imgSrc, setImgSrc] = useState(null);

  const defaultFileName = '이미지 파일을 업로드 해주세요.'
  const [fileName, setFileName] = useState(defaultFileName)
  // 이미지 업로드 현황 보기용
  const [percent, setPercent] = useState(0);

  const imageSelectHandler = (e)=>{
    const imageFile = e.target.files[0]
    setFile(imageFile)
    setFileName(imageFile.name)

    // new FileReader()는 자바스크립트 함수로 파일을 불러올 수 있는 함수다
    const fileReader = new FileReader();
    // readAsDataURL은 FileReader함수의 메소드로 Url 정보만 불러온다.
    fileReader.readAsDataURL(imageFile)
    // onload는 FileReader 함수의 메소드로  파일을 불러온 뒤 실행할 함수를 입력할 수 있다.
    fileReader.onload = (e) => {setImgSrc(e.target.result)}
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try{
      const res = await axios.post("/images", formData, {
        headers:{"Content-Type":"multipart/form-data"},
        // onUploadProgress는 aixos 메소드로 totla 용량이 고정으로 나오고 loaded로 데이터 전송현황을 확인 가능
        onUploadProgress: (e) => {
          // Math.round로 소수점을 제거함
          setPercent(Math.round(100 * e.loaded / e.total))
        }
      });
      // 기존 데이터에 새로운 res.data 값 추가하기
      setImages([...images, res.data])
      toast.success("이미지 업로드 성공")
      setTimeout(function() {
        setPercent(0);
        setFileName(defaultFileName)
        setImgSrc(null)
      }, 3000)
    }catch(err){
      toast.error(err.message)
      setPercent(0);
      setFileName(defaultFileName)
      setImgSrc(null)
      console.error(err)
    }
  }
  return (
    <div>
      {/* imgSrc값이 있으면 className에 image-preview-show를 추가하라 */}
      <img className={`image-preview ${imgSrc && "image-preview-show"}`} src={imgSrc} />
      {/* ProgressBar의 프롭스로 percent를 전송하라 */}
      <ProgressBar percent={percent} />
      <form onSubmit={onSubmit}>
        <div className="file-dropper" >
          {fileName}
          {/* type="file"이면 image 파일이 아닌 모든 파일이 업로드가 가능하다 이를 방지하기 위해 accept를 사용한다. image/*을 이용해 모든 image 파일만 업로드 가능하게 한다. */}
          <input id="image" type="file" accept="image/*" onChange={imageSelectHandler} />
        </div>
          <button className="submit-button" type="submit">제출</button>
      </form>
    </div>
  )
}

export default UploadForm

