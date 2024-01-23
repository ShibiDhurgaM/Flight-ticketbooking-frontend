import React from "react";
import Hero from "../HomeSection/Hero";

import DestinationHome from "../HomeSection/Destina/DestinationHome";
import FeatureAbout from "../HomeSection/Destina/FeatureAbout";
import AboutusDes from "../HomeSection/Destina/AboutusDes";
import Footer from "../../common/Footer/Footer";

const Home=()=>
{
    return(
        <div>
            <Hero/>
            <AboutusDes/>
           <FeatureAbout/>
            <DestinationHome/>
            <Footer/>
        </div>
    )
}
export default Home;