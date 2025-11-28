import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthContainer.css";

const AuthContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Estados: 'login', 'register', 'inmobiliaria'
  const [viewState, setViewState] = useState('login');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/register-inmobiliaria")) {
      setViewState('inmobiliaria');
    } else if (location.pathname.includes("/register")) {
      setViewState('register');
    } else {
      setViewState('login');
    }
  }, [location.pathname]);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/auth/login");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'mock-token-' + Date.now());
    window.location.href = '/dashboard';
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/register-inmobiliaria");
  };

  const handleInmobiliariaSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'mock-token-' + Date.now());
    window.location.href = '/dashboard';
  };

  // Clases dinámicas según el estado
  const isActive = viewState === 'register';
  const isInmobiliaria = viewState === 'inmobiliaria';
  const containerClass = `auth-container ${isActive ? 'active' : ''} ${isInmobiliaria ? 'inmobiliaria-view' : ''}`;

  return (
    <div className={containerClass}>
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      <div className="form-box login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>
          Iniciar Sesión
        </h2>
        <img src="/logo-urbany.png" alt="Urbany Logo" className="auth-logo animation" style={{ "--D": 1, "--S": 22 }} />
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{ "--D": 2, "--S": 22 }}>
            <input type="email" required />
            <label>Email</label>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input type={showLoginPassword ? "text" : "password"} required />
            <label>Contraseña</label>
            <svg
              className="icon password-toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? (
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              ) : (
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
              )}
            </svg>
          </div>
          <div className="checkbox-container animation" style={{ "--D": 3, "--S": 24 }}>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Recordar Contraseña</span>
            </label>
          </div>
          <div className="input-box animation" style={{ "--D": 4, "--S": 25 }}>
            <button className="btn" type="submit">
              Iniciar Sesión
            </button>
          </div>
          <div className="forgot-link animation" style={{ "--D": 5, "--S": 26 }}>
            <a href="#" className="forgot-password">
              ¿Olvidaste tu Contraseña?
            </a>
          </div>
          <div className="regi-link animation" style={{ "--D": 6, "--S": 27 }}>
            <p>
              Nuevo Usuario?{" "}
              <a href="#" onClick={handleRegisterClick}>
                Regístrese
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>
          Bienvenido a CRM Urbany
        </h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          Accede a tu cuenta para gestionar tus proyectos y clientes de forma eficiente.
        </p>
      </div>

      <div className="form-box register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
          Registro
        </h2>
        <img src="/logo-urbany.png" alt="Urbany Logo" className="auth-logo animation" style={{ "--li": 18, "--S": 1 }} />
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input type="email" required />
            <label>Correo Electrónico</label>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
            <input type={showRegisterPassword ? "text" : "password"} required />
            <label>Contraseña</label>
            <svg
              className="icon password-toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => setShowRegisterPassword(!showRegisterPassword)}
            >
              {showRegisterPassword ? (
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              ) : (
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
              )}
            </svg>
          </div>
          <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
            <input type={showConfirmPassword ? "text" : "password"} required />
            <label>Confirmar Contraseña</label>
            <svg
              className="icon password-toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              ) : (
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
              )}
            </svg>
          </div>
          <div className="checkbox-container animation" style={{ "--li": 21, "--S": 5 }}>
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>Acepto mis datos personales para fines comerciales y/o publicitarios.</span>
            </label>
          </div>
          <div className="input-box animation" style={{ "--li": 22, "--S": 6 }}>
            <button className="btn" type="submit">
              Continuar
            </button>
          </div>
          <div className="regi-link animation" style={{ "--li": 23, "--S": 7 }}>
            <p>
              ¿Ya tienes cuenta?{" "}
              <a href="#" onClick={handleLoginClick}>
                Inicia Sesión
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
          Bienvenido a CRM Urbany
        </h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          Accede a tu cuenta para gestionar tus proyectos y clientes de forma eficiente.
        </p>
      </div>

      <div className="form-box inmobiliaria inmobiliaria-form">
        <div className="form-content">
          <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>
            Registra tu inmobiliaria
          </h2>
          <form onSubmit={handleInmobiliariaSubmit}>
            <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
              <input type="text" required />
              <label>Nombre de la inmobiliaria</label>
            </div>
            <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
              <input type="tel" required />
              <label>Teléfono</label>
            </div>
            <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
              <input type="text" required />
              <label>Dirección</label>
            </div>
            <div className="input-box animation" style={{ "--D": 4, "--S": 25 }}>
              <input type="text" required />
              <label>Provincia</label>
            </div>
            <div className="input-box animation" style={{ "--D": 5, "--S": 26 }}>
              <input type="text" required />
              <label>Distrito</label>
            </div>
            <div className="checkbox-container animation" style={{ "--D": 6, "--S": 27 }}>
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>Acepto mis datos personales para fines comerciales y/o publicitarios.</span>
              </label>
            </div>
            <div className="input-box animation" style={{ "--D": 7, "--S": 28 }}>
              <button className="btn" type="submit">
                Crear Cuenta
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="info-content inmobiliaria">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>
          Bienvenido a CRM Urbany
        </h2>
        <button 
          className="btn-back animation" 
          style={{ "--D": 1, "--S": 21 }} 
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth/register");
          }}
        >
          Volver al Registro
        </button>
      </div>
    </div>
  );
};

export default AuthContainer;
