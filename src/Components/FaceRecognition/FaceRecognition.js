import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
return (
  <div className='center'>
    <div className='absolute mt2 imageContainer'>
      <img src={imageUrl} alt=''/>
    </div>
  </div>
)
}

export default FaceRecognition