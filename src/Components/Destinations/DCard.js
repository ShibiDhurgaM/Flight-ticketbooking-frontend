import React from "react"
import { Link } from "react-router-dom"

import { FaExternalLinkAlt } from "react-icons/fa";
const Dcards = ({ item: { id, image, title, sidepara, desc,sidepara1,paraImage_one,paraImage_two,desc1} }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={image} alt={title} />

          <Link to={`/singlepage/${id}`} className='blogItem-link'>
            <i><FaExternalLinkAlt /></i>
          </Link>
        </div>
        <div className='title'>
          <h3>{title} </h3>
        </div>
      </div>
    </>
  )
}

export default Dcards;