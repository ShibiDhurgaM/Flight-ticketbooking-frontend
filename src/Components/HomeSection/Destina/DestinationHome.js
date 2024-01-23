import React from "react";
import AllItem from "../../Destinations/Allitem";
const DestinationHome=()=>{
    return(
        <>
       <section className="popular top">
        <div className="full_container">
            <div className="heading">
                <div className="Heading">
                    <h1>Most popular Destinations</h1>
                <div className="line"></div>
                </div>
                <div className="content">
                    <AllItem/>
                </div>
            </div>
        </div>
       </section>
        </>
    )
}
export default DestinationHome;