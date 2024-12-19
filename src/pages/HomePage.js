import React from "react";
import "../styles/homepage.css";
import states from "../data/states"; 
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import temple from "../assets/temple-main.jpg";
import StateCard from "../components/State";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const visibleStates = states.slice(0, 8); 

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
        </div>
      </div>

      <div className="explore-section">
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
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
