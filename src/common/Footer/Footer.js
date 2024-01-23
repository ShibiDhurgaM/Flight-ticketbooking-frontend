import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaImages } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";

import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-box'>
          <h3>Explore</h3>
          <ul>
            <li><Link to='/'><IoIosHome />Home</Link></li>
            <li><Link to='/about'><GiMagnifyingGlass />About-Us</Link></li>
            <li><Link to='/our-gallery'><FaImages />Gallery</Link></li>
            <li><Link to='/where-we-fly'><RiFlightTakeoffFill />Where-We-Fly</Link></li>
            <li><Link to='/booking'><TbBrandBooking />Book!</Link></li>
            <li><Link to='/features'><FaLocationArrow />Our-Features</Link></li>
            <li><Link to='/ask-your-queries'><IoMdContacts />Queries?</Link></li>
          </ul>
        </div>
        <div className='footer-box'>
          <h3>Follow-Us-On</h3>
          <ul>
            <li><FaInstagram />   _voyage_</li>
            <li><ImFacebook2 />   voyage_001</li>
            <li><BsTwitter />   __voyage__Tweet</li>
          </ul>
        </div>
        <div className='footer-box'>
          <h3>Terms and Conditions</h3>
          <ul>
          <li><GiPaperClip />Passengers are responsible for ensuring they have the necessary travel documents, including valid identification and visas.</li>
           <li><GiPaperClip />Passengers must comply with all security and safety regulations.</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;