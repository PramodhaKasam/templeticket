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
import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/bundle'

const HomePage = () => {
  const navigate = useNavigate();
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets:true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

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
        <h1>Explore Exclusively with Us</h1>
        <div className="card-wrapper swiper">
          <div className="swiper-wrapper">
            <div className="point swiper-slide">
              <img src="https://as2.ftcdn.net/v2/jpg/06/12/32/45/1000_F_612324540_iVqW5JxR8fS8Vpj6EjQazSCgrcheb4GN.jpg" />
              <div className="matter">
                <strong>State-wise Division</strong>
                <p>
                  "Effortlessly navigate through temples by selecting the state of your choice. Experience a seamless
                  search functionality tailored for India’s diverse cultural and spiritual heritage."
                </p>
                <p><span>View </span> &#8594;</p>
              </div>
              {/* <span className="span">&#8594;</span> */}
            </div>
            <div className="point swiper-slide">
              <img src="https://t4.ftcdn.net/jpg/09/57/81/07/360_F_957810751_w7KdtaHHqd720zJWiXclnOKsmp3S48YG.jpg" />
              <div className="matter">
                <strong>Comprehensive Temple Listings</strong>
                <p>
                  "Access a meticulously curated list of temples for each state. Whether it’s a famous shrine or a hidden gem,
                   we’ve got you covered."
                </p>
                <p><span>View </span> &#8594;</p>
              </div>
              {/* <span className="span">&#8594;</span> */}
            </div>
            <div className="point swiper-slide">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gZ8ifZc5IpHfLqf4VtXldOjrIMMiuarbLw&s" />
              <div className="matter">
                <strong>More Than Just Darshan</strong>
                <p>
                  "Dive into the rich history and fascinating stories behind each temple. Discover their unique
                  traditions, architectural marvels, and specialties that make them stand out."
                </p>
                <p><span>View </span> &#8594;</p>
              </div>
              {/* <span className="span">&#8594;</span> */}
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="slide-button swiper-button-prev"></div>
          <div className="slide-button swiper-button-next"></div>
        </div>  
        {/* <p className="count">&lt;  01/04  &gt;</p> */}
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
