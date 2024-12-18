import React from "react";
import '../styles/State.css'

const StateCard = ({ temple, onClick }) => {
  return (
    <div className="temple-card">
      <div className="image">
        <img src={temple.image}  alt={temple.name} />
        <div className="content">
          <h1>{temple.name}</h1>
          <p>{temple.description}</p>
        </div>
      </div>
      <h2>{temple.name}</h2>
      <button onClick={() => onClick(temple)}> View Temples </button>
    </div>
  );
};

export default StateCard;
