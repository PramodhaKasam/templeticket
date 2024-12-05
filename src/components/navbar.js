import React from "react";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaPrayingHands, FaGlobe, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'>
          <h1 style={{textDecoration : "underline white"}}>Temple Ticket Booking</h1>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#pilgrim-services">
            <FaPrayingHands className="icon" /> Pilgrim Services
          </a>
        </li>
        <li>
          <a href="#online-services">
            <FaGlobe className="icon" /> Online Services
          </a>
        </li>
        <li>
          <a href="#about">
            <FaInfoCircle className="icon" /> About
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
