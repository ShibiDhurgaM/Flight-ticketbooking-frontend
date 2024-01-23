import React, { useState } from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import {Link, useHistory} from 'react-router-dom'
import "./style.css"
import Footer from '../../common/Footer/Footer'
import Modal from './Modal'
import axios from "axios";
const Signup = () => {
  const history=useHistory();
  const[userName,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[conpassword,setConpassword]=useState("");
  const [showModal, setShowModal] = useState(false);
  // const[recValue,setRecValue]=useState("");
  const[successMessage,setSuccessMessage]=useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const submitForm=async (e)=>{
    e.preventDefault();
    if (password !== conpassword ) {
      setErrorMessage('Failed to create yor account retry!');
      return;
    }
    try{

      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username: userName,
        email,
        password,
        confirmPassword: conpassword,
      });
      // if (password !== conpassword || response.status === 400) {
      //   setErrorMessage('Failed to create yor account retry!');
      //   return;
      // }
      if(response.status===400 || response.status===500)
      {
        setErrorMessage('Failed to create yor account retry!');
         return;
      }
      if (response.status === 200 || response.status === 201 || response.status === 304 ) {

        setSuccessMessage("Your Account is ready!");
        setShowModal(true);
        setUsername("");
        setPassword("");
        setEmail("");
        setConpassword("");
        setTimeout(() => {
          console.log("Redirecting to home page");
          setShowModal(false);
          history.push("/login");
        }, 1000);
      }
    
    } catch(error)
    {
      console.error("Signup error",error.response.data);
      setSuccessMessage("");
    }
   
  };
  const closeModal=()=>{
    setShowModal(false);
  }
  return (
   <>
   <HeadTitle/>
   <section className='forms top'>
    <div className='container'>
      <div className='sign-box'>
        <p>Join us and book your tickets! </p>
        <form action='' onSubmit={submitForm}>
          <input
          type='text'
          name='username'
          value={userName}
          onChange={(e)=>setUsername(e.target.value)}
           placeholder='User_Name'/>
          <input
           type='email'
            name='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
              placeholder='Email'/>
          <input
          type='password'
           name='password'
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password' />
          <input
           type='password'
            name='confirmpassword'
            value={conpassword}
            onChange={(e)=>setConpassword(e.target.value)}
             placeholder='Confirm_Password'/>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
          {/* <div className='flex_space'>
            <div className='flex'>
              <input type='checkbox'/>
              <label>Remember Me</label>
            </div>
            {/* <div className='flex'>
              <span>already have an account?</span>
            </div> */}
          {/* </div> */}
          <button type='submit' className='primary-btn2'>
            Sign-Up
          </button>
         
          {
            successMessage&&(
              <div className='success-message'>
                {successMessage}</div>
           
            )
          }
          <p>
          Have an account?<Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
   </section>
   {showModal && <Modal message={successMessage} onClose={closeModal}/>}
   <Footer/>
   </>
  );
}


export default Signup;
