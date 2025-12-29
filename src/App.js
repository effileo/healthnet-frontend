import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DoctorDashboard from "./pages/doctor/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/doctor" />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
