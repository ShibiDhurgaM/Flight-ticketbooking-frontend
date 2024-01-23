import React, { useEffect, useState } from 'react';
import './FlightCard.css'; 
import { RiFlightTakeoffFill } from "react-icons/ri";
import {useHistory} from 'react-router-dom';
function FlightCard() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history=useHistory();

  useEffect(() => {
    fetch('/api/flights')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch flight data');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFlights(data.flights);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <div>
       <div className="flight-images-container">
        <div className="flight-image-card">
          <img src="/images/book-1.jpg" alt="1" />
        </div>
        <div className="flight-image-card">
          <img src="/images/book-2.jpg" alt="2" />
        </div>
        <div className="flight-image-card">
          <img src="/images/book-3.jpg"alt="3" />
        </div>
      </div>
      <div className="flight-card-container">
        {flights.map((flight, index) => (
          <div key={index} className="flight-card">
            <p>
              Departure Airport: {flight.departureAirport.name} ({flight.departureAirport.code}) - {flight.departureAirport.location.city}, {flight.departureAirport.location.country}
            </p>
            <p>
              Arrival Airport: {flight.arrivalAirport.name} ({flight.arrivalAirport.code}) - {flight.arrivalAirport.location.city}, {flight.arrivalAirport.location.country}
            </p>
            <p>Departure Date & Time: {flight.departureDateTime}</p>
            <p>Arrival Date & Time: {flight.arrivalDateTime}</p>
            <p>Economy Fare: {flight.economyFare}</p>
            <p>Business Fare: {flight.businessFare}</p>
            <p>Premium Economy Fare: {flight.premiumEconomyFare}</p>
            <p>First Class Fare: {flight.firstClassFare}</p>
            <button className='primary-btn3' onClick={()=>history.push('/payment')}>Book Now<RiFlightTakeoffFill /></button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default FlightCard;
