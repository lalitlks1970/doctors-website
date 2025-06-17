import React, { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/payments", {
        appointmentId,
        amount,
        method: "online",
      });
      setMessage("Payment successful!");
    } catch {
      setMessage("Payment failed.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Payment</h1>
      <form onSubmit={handlePayment} className="max-w-md">
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Pay Now
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default PaymentPage;
