import React from "react";
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import FeatureCard from "./FeatureCard";
import Footer from "../../common/Footer/Footer";
const Feature=()=>{
    return(
        <>
       <HeadTitle/>
       <section className="about top">
        <div className="container">
            <FeatureCard/>
        </div>
       </section>
       <section className="features top">
        <div className="container featureCard flex_space">
            <div className="row row1">
                <h2><span>Food</span>Services</h2>
                <p>
                    At<span> Voyage</span> Elevate your in-flight experience with our exceptional flight food catering services. Our chef-crafted menus boast a diverse array of international cuisines, ensuring a delightful dining experience for every passenger. Emphasizing freshness and quality, we source premium ingredients to create meals that surpass high-altitude culinary challenges. From special occasion catering to accommodating dietary preferences, our customizable offerings cater to the unique needs of both airlines and passengers. With a commitment to safety, innovative presentation, and eco-friendly practices, we strive to make every meal at 35,000 feet a memorable and responsible journey into gourmet aviation dining.
                </p>
            </div>
            <div className="row image">
                <img src="/images/feature-2.jpg" alt=""/>
            </div>
        </div>
       </section>
       <section className='aboutCard mtop flex_space'>
        <div className="container featureCard flex_space">
        <div className="row row1">
            <h1>Our passengers<span>Safety</span></h1>
            <p>
            Ensuring the safety and well-being of passengers is our top priority, and our meticulously equipped flight first aid kits play a crucial role in this commitment. Each aircraft is equipped with state-of-the-art first aid kits, strategically placed for easy access by our trained cabin crew. These kits are stocked with essential medical supplies to address a range of potential health concerns during the flight. From basic first aid items like bandages and pain relievers to more specialized medical equipment, we strive to be prepared for any situation. Our cabin crew undergoes rigorous training to handle medical emergencies professionally and efficiently. Additionally, we prioritize passenger safety through routine safety demonstrations, clearly illustrating the location and usage of safety equipment, including life vests and oxygen masks. These measures, combined with our vigilant crew and well-stocked first aid kits, ensure that our flights are not only comfortable but also safe and secure, providing peace of mind to all our valued passengers.
            </p>
        </div>
        <div className="row image">
            <img src="/images/feature-4.jpg" alt=''/>
        </div>
        </div>
       </section>
       <Footer/>
        </>
    )
}

export default Feature;
