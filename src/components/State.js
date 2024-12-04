import React from "react";
import '../styles/State.css'

const StateCard = ({ temple, onClick }) => {
  return (
    <div className="temple-card">
      <img
        src={temple.image}
        alt={temple.name}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{temple.name}</h2>
      <button
        onClick={() => onClick(temple)}
        className="bg-blue-500 text-white mt-2 px-4 py-2"
      >
        View Temples
      </button>
    </div>
  );
};

export default StateCard;
