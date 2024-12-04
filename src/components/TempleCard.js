import React from "react";
import '../styles/templecard.css'

const TempleCard = ({ temple, onClick }) => {
  return (
    <div className="temple-card">
      <img
        src={temple.image}
        alt={temple.name}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{temple.name}</h2>
      <p className="text-gray-500">{temple.location}</p>
      <button
        onClick={() => onClick(temple)}
        className="bg-blue-500 text-white mt-2 px-4 py-2"
      >
        View Details
      </button>
    </div>
  );
};

export default TempleCard;
