import { useParams } from "react-router-dom";

export default function Booking() {
  const { id } = useParams();
  return <div className="p-6">Booking for doctor ID: {id}</div>;
}
