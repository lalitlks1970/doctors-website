import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import DoctorList from "./pages/DoctorList";
import BookAppointment from "./pages/BookAppointment";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<div>Welcome to Dashboard!</div>} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
