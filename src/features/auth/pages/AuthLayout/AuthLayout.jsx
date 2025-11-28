import { Outlet } from "react-router-dom";
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <AuthContainer />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
