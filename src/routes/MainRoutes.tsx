import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layouts
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";

// All Pages
import LoginPage from "@/pages/auth/LoginPage";
import NotFoundPage from "@/pages/not-found/NotFoundPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";

const LayoutSelector = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  if (currentUrl === "/") {
    return (
      <AuthLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthLayout>
    );
  } else {
    return (
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    );
  }
};

const MainRoutes = () => {
  return (
    <Router>
      <LayoutSelector />
    </Router>
  );
};

export default MainRoutes;
