import React from 'react'
import FeatureCard from '../../Features/FeatureCard'

const FeatureAbout = () => {
  return (
    <>
   <section className="popular top">
        <div className="full_container">
            <div className="heading">
                <div className="Heading">
                    <h1>Know About Our Features</h1>
                <div className="line"></div>
                </div>
                <div className="content">
                    <FeatureCard/>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default FeatureAbout