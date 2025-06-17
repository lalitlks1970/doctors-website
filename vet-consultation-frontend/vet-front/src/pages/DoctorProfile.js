import React from 'react';
import { useParams } from 'react-router-dom';

export default function DoctorProfilePage() {
  const { id } = useParams();

  // Replace this with actual fetch based on id
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold">Doctor Profile: {id}</h1>
      <p>Details coming soon...</p>
    </div>
  );
}
