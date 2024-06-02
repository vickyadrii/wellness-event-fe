import LoginForm from "@/features/auth/LoginForm";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login Page | Wellness Event";
  }, []);

  return <LoginForm />;
};

export default LoginPage;
