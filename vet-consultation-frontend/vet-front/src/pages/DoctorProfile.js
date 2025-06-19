import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DoctorProfilePage.module.css";

export default function DoctorProfilePage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:8084/api/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch doctor details.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h1 className={styles.profileTitle}>Loading Doctor Profile...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h1 className={styles.profileTitle}>Doctor Profile</h1>
          <div className={styles.errorMessage}>{error}</div>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h1 className={styles.profileTitle}>Doctor Profile</h1>
          <div className={styles.errorMessage}>Doctor not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h1 className={styles.profileTitle}>Doctor Profile: {doctor.name}</h1>
        
        <div className={styles.profileInfo}>
          <h2 className={styles.profileInfoTitle}>Professional Information</h2>
          {doctor.speciality && (
            <p className={styles.profileInfoDetail}>Speciality: {doctor.speciality}</p>
          )}
          {doctor.location && (
            <p className={styles.profileInfoDetail}>Location: {doctor.location}</p>
          )}
          {doctor.experience && (
            <p className={styles.profileInfoDetail}>Experience: {doctor.experience}</p>
          )}
          {doctor.bio && (
            <p className={styles.profileInfoDetail}>Bio: {doctor.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
}
