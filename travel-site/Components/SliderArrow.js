
import React from 'react'


  export const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 1000
     
   }

  export const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 1000
     
   }

function SliderArrow() {

     
  return (
    <div>
      
    </div>
  )
}

export default SliderArrow





