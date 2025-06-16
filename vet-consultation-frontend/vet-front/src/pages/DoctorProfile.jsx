import { useParams } from "react-router-dom";

export default function DoctorProfile() {
  const { id } = useParams();
  return <div className="p-6">Doctor Profile for ID: {id}</div>;
}
