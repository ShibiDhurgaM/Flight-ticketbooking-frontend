import React, { useState } from "react"
import "../Travelers/Gallery.css"
import "./Destination.css"
import Sdata from "./SData"
import Dcards from "./DCard"

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem;