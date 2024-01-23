import React from "react";
import "./About.css";
const AboutCard=()=>{
    return(
        <>
       <div className="aboutCard mtop flex_space">
        <div className="row row1">
            <h3>About Us</h3>
            <h1>
          <span>Learn more about</span>our history, our business and services.
            </h1>
            <p>Voyage is dedicated to making your travel experience seamless and enjoyable. Whether you're a frequent flyer or planning your dream vacation, we are here to simplify the flight booking process and offer you the best deals.Embark on an exceptional travel journey with Voyage, where the flight experience is crafted to surpass expectations. Our commitment to passenger comfort begins with spacious and ergonomic seating, ensuring a relaxing journey from takeoff to landing. </p>
          
           
            
        </div>
        <div className="row image">
            <img src="/images/about-4.jpg" alt=''/>
        </div>
       </div>
        </>
    )
}
export default AboutCard;