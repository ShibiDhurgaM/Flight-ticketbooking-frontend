import React from 'react';
import AboutCard from './AboutCard';
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import Footer from '../../common/Footer/Footer';

const About=()=>{
    return(
        <>
       <HeadTitle/>
       <section className='about top'>
       <div className='container'>
        <AboutCard/>
       </div>
    
       </section>
       <section className='features top'>
        <div className='container aboutCard flex_space'>
            <div className='row row1'>
                <h1>Our<span>Mission</span></h1>
                <p>
                
                At <span>Voyage</span>, our mission is to provide you with:
                <ul>
             <li><b>Convenience:</b>  We aim to make flight booking easy and efficient, allowing you to focus on the excitement of your journey.</li>
             <li><b>  Choice: </b>Explore a vast array of airlines, routes, and options to find the perfect flight for your needs and preferences.</li>
             <li><b>Affordability:</b> We work tirelessly to secure competitive prices and exclusive deals, ensuring that you get the most value for your money.</li>
                </ul>

            </p>
            </div>
            <div className="row image">
            <img src="/images/about-1.jpg" alt=''/>
        </div>
        </div>
       </section>
       <section className='aboutCard mtop flex_space'>
        <div className='container aboutCard flex_space'>
            <div className='row row1'>
                <h1>Our<span>Story</span></h1>
                <p>
                 Voyage was founded with a passion for travel and a vision to simplify the flight booking process. Over the years, we have grown into a trusted platform, serving thousands of satisfied customers. Our journey is fueled by the belief that everyone should have access to convenient and affordable travel.
            </p>

            </div>
            <div className="row image">
            <img src="/images/about-3.jpg" alt=''/>
        </div>
        </div>
       </section>
       <section className='features top'>
        <div className='container aboutCard flex_space'>
            <div className='row row1'>
                
            <h1>Why to <span>Choose Us?</span></h1>
                <p>
            <ul>
                <li>
           <b>User-Friendly Interface:</b> 
            Our intuitive website is designed to offer a seamless booking experience. Navigate effortlessly, compare prices, and secure your tickets with just a few clicks.</li>
            <li>
             <b>Extensive Network:</b>
            With access to a wide range of airlines and routes, we provide you with numerous options, allowing you to find the most convenient and cost-effective flights.</li>
          <li>
            <b>Best Price Guarantee:</b>
            Rest assured that you're getting the best possible prices on your flight tickets. Our commitment to affordability ensures that you can travel without breaking the bank.</li>
           <li> <b> Customer Support:</b>
            Our dedicated customer support team is available around the clock to assist you. Whether you have questions about bookings or need help during your journey, we're here for you.</li>
            </ul>
            </p>
            </div>
            <div className="row image">
            <img src="/images/about-2.jpg" alt=''/>
            
        </div>
        </div>
       </section>
       <Footer/>
        </>
    )
}
export default About;