import React, { useState } from "react";
import axios from "axios";
import styles from "./PaymentPage.module.css";

const PaymentPage = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);
    try {
      await axios.post("http://localhost:8080/api/payments", {
        appointmentId,
        amount,
        method: "online",
      });
      setMessage("Payment successful!");
      setIsError(false);
    } catch {
      setMessage("Payment failed.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentCard}>
        <h1 className={styles.paymentTitle}>Payment</h1>
        <form onSubmit={handlePayment} className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Appointment ID</label>
            <input
              type="text"
              placeholder="Appointment ID"
              value={appointmentId}
              onChange={(e) => setAppointmentId(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Amount</label>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={styles.paymentButton}
          >
            {loading && <span className={styles.spinner}></span>}
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
        {message && (
          <div className={`${styles.message} ${isError ? styles.error : ""}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
