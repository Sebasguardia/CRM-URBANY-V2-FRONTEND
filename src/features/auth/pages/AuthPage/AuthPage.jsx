import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';
import { useAuth } from '../../../../app/providers/AuthProvider';
import AuthInput from '../../components/AuthInput/AuthInput';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const isRegister = location.pathname === '/register';
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login({
      username: loginData.username || 'demo',
      password: loginData.password || 'demo'
    });
    
    if (result.success) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 300);
    }
    setIsLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login({
      username: registerData.username || 'demo',
      email: registerData.email || 'demo@example.com',
      password: registerData.password || 'demo'
    });
    
    if (result.success) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 300);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setLoginData({ username: '', password: '' });
    setRegisterData({ username: '', email: '', password: '' });
  }, [location.pathname]);

  const handleSwitchToRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${isRegister ? styles.active : ''}`}>
        <div className={styles.curvedShape}></div>
        <div className={styles.curvedShape2}></div>
        <div className={`${styles.formBox} ${styles.login}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 21 }}>
            Iniciar Sesión
          </h2>
          <form key={`login-form-${location.pathname}`} onSubmit={handleLoginSubmit}>
            <AuthInput
              key={`login-username-${location.pathname}`}
              type="text"
              name="username"
              label="Usuario"
              value={loginData.username}
              onChange={handleLoginChange}
              icon={User}
              className={styles.animation}
              style={{ '--D': 1, '--S': 22 }}
            />
            <AuthInput
              key={`login-password-${location.pathname}`}
              type="password"
              name="password"
              label="Contraseña"
              value={loginData.password}
              onChange={handleLoginChange}
              icon={Lock}
              className={styles.animation}
              style={{ '--D': 2, '--S': 23 }}
            />
            <div className={`${styles.animation} ${styles.buttonBox}`} style={{ '--D': 3, '--S': 24 }}>
              <button className={styles.btn} type="submit" disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </div>
            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--D': 4, '--S': 25 }}>
              <p>
                ¿No tienes una cuenta? <br />{' '}
                <a href="#" className={styles.signUpLink} onClick={handleSwitchToRegister}>
                  Regístrate
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${styles.infoContent} ${styles.login}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 20 }}>
            BIENVENIDO A URBANY
          </h2>
        </div>
        <div className={`${styles.formBox} ${styles.register}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            Registrarse
          </h2>
          <form key={`register-form-${location.pathname}`} onSubmit={handleRegisterSubmit}>
            <AuthInput
              key={`register-username-${location.pathname}`}
              type="text"
              name="username"
              label="Usuario"
              value={registerData.username}
              onChange={handleRegisterChange}
              icon={User}
              className={styles.animation}
              style={{ '--li': 18, '--S': 1 }}
            />
            <AuthInput
              key={`register-email-${location.pathname}`}
              type="email"
              name="email"
              label="Correo Electrónico"
              value={registerData.email}
              onChange={handleRegisterChange}
              icon={Mail}
              className={styles.animation}
              style={{ '--li': 19, '--S': 2 }}
            />
            <AuthInput
              key={`register-password-${location.pathname}`}
              type="password"
              name="password"
              label="Contraseña"
              value={registerData.password}
              onChange={handleRegisterChange}
              icon={Lock}
              className={styles.animation}
              style={{ '--li': 19, '--S': 3 }}
            />
            <div className={`${styles.animation} ${styles.buttonBox}`} style={{ '--li': 20, '--S': 4 }}>
              <button className={styles.btn} type="submit" disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Registrarse'}
              </button>
            </div>
            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--li': 21, '--S': 5 }}>
              <p>
                ¿Ya tienes una cuenta? <br />{' '}
                <a href="#" className={styles.signInLink} onClick={handleSwitchToLogin}>
                  Inicia Sesión
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${styles.infoContent} ${styles.register}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            BIENVENIDA A LA INMOBILIARIA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

