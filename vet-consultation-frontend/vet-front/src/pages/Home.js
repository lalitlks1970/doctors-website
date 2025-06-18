import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css';

const HomePage = () => {
  // Mock categories with images (use your own images or icons)
  const categories = [
    { id: 'dog', name: 'Dog', image: 'https://cdn-icons-png.flaticon.com/512/1869/1869679.png' },
    { id: 'cat', name: 'Cat', image: 'https://cdn-icons-png.flaticon.com/512/220/220124.png' },
    { id: 'bird', name: 'Bird', image: 'https://cdn-icons-png.flaticon.com/512/1869/1869691.png' },
    { id: 'other', name: 'Other', image: 'https://cdn-icons-png.flaticon.com/512/1869/1869706.png' }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [location, setLocation] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctors from your API
  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('http://localhost:8080/api/doctors/all')
      .then(res => {
        setDoctors(res.data);
      })
      .catch(err => {
        setError('Failed to fetch doctors. Please try again.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter doctors based on category and location
  const filteredDoctors = doctors.filter(doc => {
    const matchesCategory = !selectedCategory || doc.category === selectedCategory;
    const matchesLocation = !location || doc.location.toLowerCase().includes(location.toLowerCase());
    return matchesCategory && matchesLocation;
  });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCard}>
        <h1 className={styles.homeTitle}>Welcome to Vet Consult</h1>
        <p className={styles.homeSubtitle}>Choose the best care for your pet.</p>

        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <div
              key={category.id}
              className={styles.categoryCard}
              onClick={() => setSelectedCategory(category.id)}
            >
              <img
                src={category.image}
                alt={category.name}
                className={styles.categoryImage}
              />
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="City (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.locationInput}
        />

        <h2 className={styles.categoryName}>
          {selectedCategory
            ? `Doctors for ${categories.find(c => c.id === selectedCategory).name}`
            : 'All Doctors'}
        </h2>

        {loading && <p className={styles.noDoctors}>Loading doctors...</p>}
        {error && <p className={styles.noDoctors}>{error}</p>}
        {!loading && !error && (
          <div className={styles.doctorsGrid}>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <div key={doctor.id} className={styles.doctorCard}>
                  <span className={styles.doctorCategory}>
                    {categories.find(c => c.id === doctor.category)?.name || doctor.category}
                  </span>
                  <h3 className={styles.doctorName}>{doctor.name}</h3>
                  <p className={styles.doctorDetail}>{doctor.speciality}</p>
                  <p className={styles.doctorDetail}>Location: {doctor.location}</p>
                </div>
              ))
            ) : (
              <p className={styles.noDoctors}>No doctors found for your selection.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
