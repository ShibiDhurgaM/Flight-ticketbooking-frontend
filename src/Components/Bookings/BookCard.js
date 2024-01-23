import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import './Book.css'


const FlightBooking = () => {
    const history=useHistory();
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        passengers:'',
    });
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try{
            setLoading(false);
            history.push("/flightdetails");
        }
        catch(error)
        {
            setLoading(false);
            setError("Failed to search flights try again");
        }


       
    };
   
   
    return (
        <div className="flight-booking">
            <h1>Get Your Tickets!</h1>
            <form onSubmit={handleSubmit}>
               
                    <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                        placeholder="Origin"
                    />
               
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        placeholder="Destination:"
                    />
                    <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        required
                        placeholder="Departure Date"
                    />
                   
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        placeholder="Return Date"
                    />
               
                   
                    <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        min="1"
                        required
                        placeholder="Passengers"
                    />
             


                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
        </div>
    );
};


export default FlightBooking;



