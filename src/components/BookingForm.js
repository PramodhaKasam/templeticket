import React, { useState } from "react";
import '../styles/bookingform.css'

const BookingForm = ({ temple }) => {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Booking for ${temple.name} on ${date} at ${timeSlot}`);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2 className="text-lg font-bold">Book Tickets for {temple.name}</h2>
      <div className="my-2">
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="my-2">
        <label>Time Slot: </label>
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="border p-2"
        >
          <option value="">Select a time slot</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
