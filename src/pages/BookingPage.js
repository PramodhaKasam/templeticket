import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import Navbar from "../components/navbar";

const BookingPage = () => {
  const { id } = useParams();

  const temple = {
    id,
    name: "Example Temple",
    location: "Example Location",
  };

  return (
    <div className="p-4">
      <Navbar/>
      <BookingForm temple={temple} />
    </div>
  );
};

export default BookingPage;
