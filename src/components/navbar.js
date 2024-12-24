import React from "react";
import "../styles/navbar.css";
import { Link} from "react-router-dom";
import { FaHome, FaPrayingHands, FaGlobe, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'>
          <h1 style={{textDecoration: "underline  white"}}>Temple Ticket Booking</h1>
        </Link>
      </div>
      <div className="sign">
        <p>Sign up</p>
        <p>Log in</p>
      </div>
      
    </nav>
  );
};

export default Navbar;
