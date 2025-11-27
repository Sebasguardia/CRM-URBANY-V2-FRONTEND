import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { useAuth } from '../../../../app/providers/AuthProvider';
import AuthInput from '../../components/AuthInput/AuthInput';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
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
      <div className={`${styles.container} ${styles.active}`}>
        <div className={styles.curvedShape}></div>
        <div className={styles.curvedShape2}></div>
        <div className={`${styles.formBox} ${styles.login}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 21 }}>
            Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <AuthInput
              type="text"
              name="username"
              label="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              icon={User}
              className={styles.animation}
              style={{ '--D': 1, '--S': 22 }}
            />
            <AuthInput
              type="password"
              name="password"
              label="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              icon={Lock}
              className={styles.animation}
              style={{ '--D': 2, '--S': 23 }}
            />
            <div className={`${styles.animation} ${styles.buttonBox}`} style={{ '--D': 3, '--S': 24 }}>
              <button className={styles.btn} type="submit">
                Login
              </button>
            </div>
            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--D': 4, '--S': 25 }}>
              <p>
                Don't have an account? <br />{' '}
                <a href="#" className={styles.signUpLink} onClick={handleSwitchToRegister}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${styles.infoContent} ${styles.login}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 20 }}>
            WELCOME BACK!
          </h2>
          <p className={styles.animation} style={{ '--D': 1, '--S': 21 }}>
            We are happy to have you with us again. If you need anything, we are here to help.
          </p>
        </div>
        <div className={`${styles.formBox} ${styles.register}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            Register
          </h2>
          <form onSubmit={handleRegisterSubmit}>
            <AuthInput
              type="text"
              name="username"
              label="Username"
              value={registerData.username}
              onChange={handleRegisterChange}
              icon={User}
              className={styles.animation}
              style={{ '--li': 18, '--S': 1 }}
            />
            <AuthInput
              type="email"
              name="email"
              label="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              icon={Mail}
              className={styles.animation}
              style={{ '--li': 19, '--S': 2 }}
            />
            <AuthInput
              type="password"
              name="password"
              label="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              icon={Lock}
              className={styles.animation}
              style={{ '--li': 19, '--S': 3 }}
            />
            <div className={`${styles.animation} ${styles.buttonBox}`} style={{ '--li': 20, '--S': 4 }}>
              <button className={styles.btn} type="submit" disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Register'}
              </button>
            </div>
            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--li': 21, '--S': 5 }}>
              <p>
                Already have an account? <br />{' '}
                <a href="#" className={styles.signInLink} onClick={handleSwitchToLogin}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${styles.infoContent} ${styles.register}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            WELCOME!
          </h2>
          <p className={styles.animation} style={{ '--li': 18, '--S': 1 }}>
            We're delighted to have you here. If you need any assistance, feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
