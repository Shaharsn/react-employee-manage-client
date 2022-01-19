import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./app/store/auth/AuthContext";
import PrivateRoute from "./app/routerUtils/PrivateRoute";
import Dashboard from "./app/components/dashboard/Dashboard";
import Login from "./app/components/login/Login";
import "./App.css";
import Navbar from "./app/components/navbar/Navbar";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        {/* the PrivateRoute restrict the Routes to work just if the user is logged in*/}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/*" element={<Navigate replace to="/dashboard" />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
