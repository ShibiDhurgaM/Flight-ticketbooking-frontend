import React, { useState } from "react";
import { PiCaretCircleDoubleLeftBold, PiCaretCircleDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const SeaterTypeDropdown = ({ onChange, value, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="seater-type-dropdown">
      <input
        type="text"
        placeholder="Select Seater Type"
        value={value}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const [seaterType, setSeaterType] = useState("");
  const seaterOptions = [
    { label: "Economy", value: "Economy" },
    { label: "Premium Economy", value: "Premium Economy" },
    { label: "Business class", value: "Business Class" },
   {label:"First Class", value:"First Class"}
  ];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <PiCaretCircleDoubleLeftBold />
          </button>
          <button className="next" onClick={nextSlide}>
            <PiCaretCircleDoubleRightBold />
          </button>
        </div>

        {slides.map((slide, index) => (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide.images} alt="Home" />}
          </div>
        ))}
      </section>

      <section className="slide-form">
        <div className="container">
          <h2>Your Holiday Is a Flight Away!</h2>
          <span> Search and Book Your Tickets </span>

          <form>
            <div className="flex_space">
            <input type="text" placeholder="Departure airport" />
            <input type="text" placeholder="Arrival airport"/>
            </div>
            <div className="flex_space">
             <input  type="date" placeholder="Departing" />
             <input type="date" placeholder="Returning" />
            </div>
           

            <div className="flex_space">
              <input type="number" placeholder="Passangers" />
              
            </div>

            <SeaterTypeDropdown  
              value={seaterType}
              onChange={(value) => setSeaterType(value)}
              options={seaterOptions}/>
          
              <Link to='/login'>
             <input type="Submit" value="Search" className="submit" />
             </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
