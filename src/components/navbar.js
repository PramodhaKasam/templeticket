import React from "react";
import "../styles/navbar.css";
import { useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 style={{cursor : 'pointer'}} onClick={() => navigate('/')}>Temple Ticket Booking</h1>
      </div>
      <div className="sign">
        <p>Sign up</p>
        <p>Log in</p>
      </div>
      
    </nav>
  );
};

export default Navbar;
