import React, { useState } from 'react'
import "./styles/sliderImg.css"

const SliderImgs = ({ product }) => {

  const [currentImg, setCurrentImg] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${currentImg}/3 * 100%))`
  }

  const handlePrev = () => {
    if (currentImg - 1 < 0) {
      setCurrentImg(2)
    } else {
      setCurrentImg(currentImg - 1)
    }
  }

  const handleNext = () => {
    if (currentImg + 1 > 2) {
      setCurrentImg(0)
    } else {
      setCurrentImg(currentImg + 1)
    }
  }


  return (
    <div >
     <div className='slider'>
      <button className='slider_arrowhead slider_left' onClick={handlePrev}>&lt;</button>
      <div style={objStyle} className='slider_interior'>
        {
          product?.images.map(imgInfo => (
            <div key={imgInfo.id} className='slider_img-contain'>
              <img className='slider_img'  src={imgInfo.url} alt="" />
            </div>

          ))
        }
      </div>
      <button className='slider_arrowhead slider_rigth' onClick={handleNext}>&gt;</button>
    </div>

     <div className='slider_select'>
     {
         product?.images.map(imgInfo => (
           <div key={imgInfo.id} className='img_select-container'>
             <img className='select_img'  src={imgInfo.url} alt="" />
           </div>

         ))
       }
     </div>
    </div>
   
  )
}

export default SliderImgs