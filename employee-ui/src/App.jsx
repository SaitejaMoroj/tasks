import { Routes, Route } from "react-router-dom";

import Login from "./LoginCred/Login";
import Signup from "./LoginCred/Signup";
import ForgotPassword from "./LoginCred/Forgot";

import DashboardLayout from "./layout/DashboardLayout";

// Pages
import DashboardHome from "./pages/DashboardHome";
import Attendance from "./pages/Attendance";
import Tasks from "./pages/Tasks";
import Payslip from "./pages/Payslip";
import Connect from "./pages/Connect";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />  {/* /dashboard */}
        <Route path="attendance" element={<Attendance />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="connect" element={<Connect />} />
      </Route>
    </Routes>
  );
}

export default App;
