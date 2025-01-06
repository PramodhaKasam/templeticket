import React from "react";
import "../styles/homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import temple from "../assets/temple-main.jpg";
import temple1 from "../assets/temple-main-2.jpg"
import bg from '../assets/bg.jpg'
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const images = [
    temple,
    'https://t4.ftcdn.net/jpg/11/11/03/53/360_F_1111035306_VCVZFg3Z37p5QBBSTtL04vMuP80iI5y8.jpg',   
    'https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2FSun_Temples_of_India_2c4e94a682.jpg&w=3840&q=50',   
    'https://www.ramana-maharshi.org/wp-content/uploads/2024/01/aim_624_4.jpg', 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const style = {
      backgroundImage: 'url(https://cdn.stocksnap.io/img-thumbs/960w/abstract-background_O4SYY1ZGMO.jpg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      // height: '100vh' 
  }
 

  return (
    <div style={ style}>
      <Navbar />
      <div className="hero">
        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        
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
        <div className="card-wrapper ">
          <div className="swiper-wrapper">
            <div className="point ">
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
            <div className="point ">
              <img src="https://t4.ftcdn.net/jpg/09/57/81/07/360_F_957810751_w7KdtaHHqd720zJWiXclnOKsmp3S48YG.jpg" />
              <div className="matter">
                <strong>Comprehensive Temple Listings</strong>
                <p>
                  "Access a meticulously curated list of temples for each state. Whether it’s a famous shrine or a hidden gem,
                   we’ve got you covered."
                </p>
                <p><span>View </span> &#8594;</p>
              </div>
              
            </div>
            <div className="point ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gZ8ifZc5IpHfLqf4VtXldOjrIMMiuarbLw&s" />
              <div className="matter">
                <strong>More Than Just Darshan</strong>
                <p>
                  "Dive into the rich history and fascinating stories behind each temple. Discover their unique
                  traditions, architectural marvels, and specialties that make them stand out."
                </p>
                <p><span>View </span> &#8594;</p>
              </div>
             
            </div>
          </div>
         
        </div>  
       
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
