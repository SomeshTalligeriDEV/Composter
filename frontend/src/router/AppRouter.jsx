import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import LandingPage from "../pages/LandingPage.jsx";
import Docs from "../pages/Docs.jsx";

// Auth Pages
import Login from "../pages/Auth/Login.jsx";
import Signup from "../pages/Auth/Signup.jsx";
import ResetPassword from "../pages/Auth/ResetPassword.jsx";

// Dashboard Pages
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import DashboardHome from "../pages/Dashboard/DashboardHome.jsx";
import ComponentsList from "../pages/Dashboard/ComponentsList.jsx";
import ComponentDetail from "../pages/Dashboard/ComponentDetail.jsx";
import UploadComponent from "../pages/Dashboard/UploadComponent.jsx";
import Settings from "../pages/Dashboard/Settings.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Docs />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="components" element={<ComponentsList />} />
          <Route path="components/:id" element={<ComponentDetail />} />
          <Route path="upload" element={<UploadComponent />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Navigate to="/app/settings" replace />} />
          <Route path="tags" element={<div className="text-white p-8">Tags Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
