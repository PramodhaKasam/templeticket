import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import '../styles/Templedarshan.css';
import Footer from "../components/Footer";

function Darshan() {
  const { templeName } = useParams();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    type: "",
    cost: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="darshan-page">
        <h1>Darshan Booking for {templeName}</h1>
        <form onSubmit={handleSubmit} className="darshan-form">
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Type:
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="General">General</option>
              <option value="VIP">VIP</option>
              <option value="Special">Special</option>
            </select>
          </label>
          <button type="submit">Book Darshan</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Darshan;
