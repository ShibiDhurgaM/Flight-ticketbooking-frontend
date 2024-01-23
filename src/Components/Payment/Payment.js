// Payment.js
import React, { useState, useEffect } from 'react';
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import "./Payment.css";
import Footer from '../../common/Footer/Footer'
const KEY = 'pk_test_51OWALUSHybOfn9112vOLdi6qsq7ByxvxfMqllc3qJsuQx7aEhr35HxDgl6j8qMSU0MOjJSm8nsTYA8KFzPMOULZ100AueDlFkf';

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/stripe/payment', {
        tokenId: stripeToken.id,
        amount: 20000,
      });
      setPaymentStatus('success');
      console.log(res.data);
    } catch (err) {
      setError(err.message);
      setPaymentStatus('failed');
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    const makeRequest = async () => {
      if (stripeToken) {
        setLoading(true);
        try {
          const res = await axios.post('http://localhost:5000/api/stripe/payment', {
            tokenId: stripeToken.id,
            amount: 20000,
          });
          setPaymentStatus('success');
          console.log(res.data);
        } catch (err) {
          setError(err.message);
          setPaymentStatus('failed');
          console.error(err);
        }
        setLoading(false);
      }
    };

    makeRequest();
  }, [stripeToken]);

  return (
    <>
        <HeadTitle />
    <div className='payment__sign-box'>
    <p>Pay & confirm your ticket!</p>
      <form className='payment__forms' onSubmit={handleSubmit}>
        <div>
        
          <input type="text" placeholder='FirstName' id="firstName" name="firstName" required />
        </div>
        <div>
         
          <input type="text" placeholder='LastName' id="lastName" name="lastName" required />
        </div>
        <div>
        
          <input id="tempAddress" type='text' placeholder='Temporary Address' name="tempAddress" required />
        </div>
        <div>
         
          <input id="permAddress" type="text" placeholder='Permanent Address'name="permAddress" required />
        </div>
        <div>
        
          <input type="email" placeholder='Email' id="email" name="email" required />
        </div>
        <div>
          
          <input type="tel" placeholder='Contact Number-1'id="contactNumber1" name="contactNumber1" required />
        </div>
        <div>
        
          <input type="tel" placeholder='Contact Number-2' id="contactNumber2" name="contactNumber2" />
        </div>
      </form>
      <StripeCheckout
        name="Voyage"
        image="/images/Voyage.png"
        billingAddress
        shippingAddress
        description="Your bill is 20000 rupees"
        amount={20000}
        currency='INR'
        token={onToken}
        stripeKey={KEY}
      >
        <button className='primary-btn2'>Pay Now</button>
      </StripeCheckout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {paymentStatus === 'success' && <p>Payment successful!</p>}
      {paymentStatus === 'failed' && <p>Payment failed. Please try again.</p>}
    </div>
    <Footer/>
    </>
  );
};

export default Payment;
