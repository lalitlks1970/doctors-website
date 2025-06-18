import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./DoctorList.module.css";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch(() => setDoctors([]));
  }, []);

  return (
    <div className={styles.doctorListContainer}>
      <div className={styles.doctorListCard}>
        <h1 className={styles.doctorListTitle}>Available Doctors</h1>
        <div className={styles.doctorsGrid}>
          {doctors.map((doc) => (
            <div key={doc.id} className={styles.doctorCard}>
              <h2 className={styles.doctorName}>{doc.name}</h2>
              <p className={styles.doctorDetail}>Speciality: {doc.speciality}</p>
              <p className={styles.doctorDetail}>Location: {doc.location}</p>
              <button
                onClick={() => alert(`Book appointment with ${doc.name}`)}
                className={styles.bookButton}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
