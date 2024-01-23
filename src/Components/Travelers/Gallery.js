import React from "react"
import Cards from "./Card"
import GalleryData from "./GalleryData"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import './Gallery.css'
import Footer from "../../common/Footer/Footer"

const Gallery = () => {
  return (
    <>
     <HeadTitle/>
      <section className='gallery top'>
       <div className='container grid'>
          {GalleryData.map((value) => {
            return <Cards images={value.img} title={value.title} />
          })}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Gallery;