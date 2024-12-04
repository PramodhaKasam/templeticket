import React from "react";
import { useParams } from "react-router-dom";

const TempleDetails = () => {
  const { id } = useParams();

  const temple = {
    id,
    name: "Example Temple",
    location: "Example Location",
    description: "A beautiful temple with rich history.",
    image: "/example-temple.jpg",
  };

  return (
    <div className="p-4">
      <img
        src={temple.image}
        alt={temple.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{temple.name}</h1>
      <p className="text-gray-500">{temple.location}</p>
      <p className="mt-4">{temple.description}</p>
    </div>
  );
};

export default TempleDetails;
