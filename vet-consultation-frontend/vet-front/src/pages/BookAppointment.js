import React, { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/appointments", {
        doctorId,
        date,
      });
      setMessage("Appointment booked successfully!");
    } catch {
      setMessage("Failed to book appointment.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Book Appointment</h1>
      <form onSubmit={handleBook} className="max-w-md">
        <input
          type="text"
          placeholder="Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Book
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default BookAppointment;
