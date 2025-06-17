import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch(() => setDoctors([]));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p>Speciality: {doc.speciality}</p>
            <p>Location: {doc.location}</p>
            <button
              onClick={() => alert(`Book appointment with ${doc.name}`)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
