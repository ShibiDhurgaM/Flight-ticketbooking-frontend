import React, { useState } from "react"
import { FaRegImages } from "react-icons/fa";
const Cards=(props) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
   
      <div className='items'>
        <div className='img'>
          <img src={props.images} alt='Gallery'/>
         <i><FaRegImages  onClick={toggleModal}/></i> 
        </div>
        <div className='title'>
          <h3>{props.title} </h3>
        </div>
      </div>

      {popup && (
        <div className='popup'>
          <div className='hide'></div>
          <div className='popup-content'>
            <button onClick={toggleModal}>Close</button>
            <img src={props.images} alt='Gallery' />
          </div>
        </div>
      )}
    </>
  )
}

export default Cards;