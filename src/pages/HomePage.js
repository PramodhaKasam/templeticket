import React from "react";
import "../styles/homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import temple from "../assets/temple-main.jpg";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={temple} alt="Temple" className="hero-image" />
        <div className="hero-text">
          <h1>Discover the Divine</h1>
          <p>
            Book tickets to explore the most revered temples across India.
            Embark on a spiritual journey with ease and convenience.
          </p>
          <button>Explore</button>
        </div>
      </div>

      <div className="texts">
        <h1>Everything You Need for a Seamless Temple Journey</h1>
        <p>
           Plan your spiritual visit with ease. From travel and accommodation to darshan bookings and
           exploring nearby attractions, our platform brings it all together in one place. 
          
        </p>
      </div>

      <h1 className="header">Our Services</h1>
      <div className="services">
        <div className="box">
          <h2>Darshan</h2>
          <ul>
          <span><i className="fa fa-ticket"></i><strong>Ticket booking:</strong> Options for regular, special, and VIP darshan tickets</span>
          <span><i className="fa fa-clock"></i><strong>Timings:</strong> Mention specific timings for various darshan types(morning, afternoon, evening)</span>
          </ul>
          <button>Try Now</button>
        </div>

        <div className="box">
          <h2>Accomodation</h2>
          <ul>
            <span><i className="fa fa-home"></i><strong>Stay Options:</strong> Showcase partnerships with temple guesthouses and nearby hotels</span>
            <span><i className="fa fa-cutlery"></i><strong>Detailed Features:</strong> Provide lists of aenities like air conditioning, breakfast, or hot water facilities.</span>
            <span><i className="fa fa-envelope-open"></i><strong>Room Categories:</strong>  Specify choices like single rooms, family rooms, and suites.</span>
          </ul>
          <button>Try Now</button>
        </div>

        <div className="box">
          <h2>Travel</h2>
          <ul>
            <span><i className="fa fa-subway"></i><strong>Modes of transport:</strong> Highlight train and bus schedules to the temple.</span>
            <span><i className="fa fa-map"></i><strong>Route Planner:</strong> Interactive route planning for self-driven travelers</span>
          </ul>
          <button>Try Now</button>
        </div>
      </div>

      <div className="support">
        <h1>Name supports you and your journey at every stage</h1>
        <div className="segments">
          <div className="segment">
            <FontAwesomeIcon icon={faHandsPraying} size="5x" style={{ color: 'blue' }}/>
            <strong>Streamline your visit</strong>
            <p>Experience seamless worship with easy-to-book slots.</p>
          </div>

          <div className="segment">
           <FontAwesomeIcon icon={faHouse} size="5x" style={{ color: 'blue', display:'flex', justifyContent:'center'}}/>
            <strong>Comfortable Stays</strong>
            <p>
              Choose from affordable dharamshalas, premium hotels, and family-friendly accommodations
               near the temple.
            </p>
          </div>

          <div className="segment">
            <FontAwesomeIcon icon={faCompass} size="5x" style={{ color: 'blue' }} />
            <strong>Easy travel access</strong>
            <p>
             Plan your journey with detailed transport options, including public transport schedules,
             shuttle services, and cab bookings.
            </p>
          </div>

          <div className="segment">
            <FontAwesomeIcon icon={faLocationDot} size="5x" style={{ color: 'blue' }}/>
            <strong>Discover nearby attractions</strong>
            <p>
              Explore must-visit tourist spots nearby, such as scenic landscapes, cultural landmarks, and historical sites.
            </p>
          </div>
        </div>
      </div>

      <div className="what">
        
      </div>

      {/* <div className="explore-section">
        <h1>Explore Temples</h1>
        <div className="temple-grid">
          {visibleStates.map((state) => (
            <StateCard
              key={state.id}
              temple={state}
              onClick={() => navigate(`/state/${state.name}`)}
            />
          ))}
        </div>
        <div className="explore-gradient"></div>
        <Link to='/viewStates'>
          <button className="view-more-btn"> View More States </button>
        </Link>  
      </div> */}

      <Footer />
    </div>
  );
};

export default HomePage;
