import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./style.css";
import Footer from "../../common/Footer/Footer";
import Modal from "./Modal";
import axios from "axios";

const Loginpage = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("Logged in successfully!");
        setShowModal(true);
        setIsAuthenticated(true);
        setTimeout(() => {
          setShowModal(false);
          history.push("/booking");
        }, 1000);
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>Login to manage your bookings!</p>
            <form onSubmit={submitForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {/* <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex">
                  <span> forgot my password?</span>
                </div>
              </div> */}
              <button type="submit" className="primary-btn2">
                Login
              </button>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <p>
                Don't have account? <Link to="/sign-up">Signup!</Link>
              </p>
              
            </form>
          </div>
        </div>
      </section>
      {showModal && <Modal message={successMessage} onClose={closeModal} />}
      <Footer />
    </>
  );
};

export default Loginpage;
