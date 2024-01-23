import React,{useState} from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";
import { FaInstagram } from "react-icons/fa6";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaMailBulk } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <img src="/images/Voyage.png" alt="logo" className="applogo" />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About-Us
              </Link>
            </li>
            <li>
              <Link to="/our-gallery" onClick={closeMobileMenu}>
                Our-Gallery
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={closeMobileMenu}>
                Book!
              </Link>
            </li>
            <li>
              <Link to="/where-we-fly" onClick={closeMobileMenu}>
                Where We Fly
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={closeMobileMenu}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/ask-your-queries" onClick={closeMobileMenu}>
                Queries?
              </Link>
            </li>
           
          </ul>
          
          <div className="login-area flex">

            <li>
              <Link to="/login">
              <i><SiGnuprivacyguard /> Login</i>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <i><SiGnuprivacyguard />SignUp</i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
              <i><IoIosContacts />Contact</i>
              </Link>
            </li>
          </div>
          </div>
      </nav>
     <header>
        <div className='container flex-space'>
          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
              <FaInstagram />
              </div>
              <div className='text'>
                <h4>Instagram</h4>
                <Link to='/contact'>_voyage_</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
              <PiPhoneCallDuotone />
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+91 789 019 0876</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
              <FaMailBulk />
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>voyage@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

        </>
    )
}
export default Navbar;