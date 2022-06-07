import React, {useContext} from 'react'
import { ImageContext } from '../context/ImageContext';

const ImageList = () => {
  const [images] = useContext(ImageContext)
  const imgList = images.map(image => (
    <img
      key={image.key}
      style={{ width:"100%" }} 
      src={`http://localhost:5000/uploads/${image.key}`} 
      alt="image_list"
    />
  ))
  return (
    <div>
      <h3>Image LIst</h3>
      {imgList}
    </div>
  )
}

export default ImageList