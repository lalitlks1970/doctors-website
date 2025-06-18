import React, { useState } from "react";
import axios from "axios";
import styles from "./BookAppointment.module.css";

const BookAppointment = () => {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/appointments", {
        doctorId,
        date,
      });
      setMessage("Appointment booked successfully!");
      setIsError(false);
    } catch {
      setMessage("Failed to book appointment.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appointmentContainer}>
      <div className={styles.appointmentCard}>
        <h1 className={styles.appointmentTitle}>Book Appointment</h1>

        {message && (
          <div className={`${styles.message} ${isError ? styles.error : ""}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleBook} className={styles.appointmentForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Doctor ID</label>
            <input
              type="text"
              placeholder="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.bookButton}
          >
            {loading && <span className={styles.spinner}></span>}
            {loading ? "Booking..." : "Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
