import React from 'react'
import './Features.css'
const FeatureCard = () => {
  return (
   <>
   <div className='featureCard mtop flex_space'>
    <div className='row row1'>
        <h3>Our Features</h3>
        <h1>
            <span>Experience unparalleled comfort</span> and convenience</h1> 
           <p>Indulge in an extraordinary travel experience with our exceptional flight facilities, meticulously designed to redefine the way you journey. Immerse yourself in a world of unparalleled comfort and convenience, where every detail is crafted to elevate your flight to new heights. From spacious and ergonomic seating to a rich array of in-flight amenities, we ensure that your travel experience is not just a journey but a luxurious adventure. Our commitment is to provide you with the utmost comfort, making your time in the air as enjoyable and rejuvenating as possible. Welcome to a new era of travel, where our top-notch facilities set the standard for excellence.</p>
      
    </div>
    <div className='row image'>
        <img src='/images/feature-1.jpg' alt='fet'/>
    </div>
   </div>
   </>
  )
}

export default FeatureCard