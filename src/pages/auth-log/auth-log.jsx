import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./auth-log.scss";

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="url(#paint0_linear)"/>
    <path d="M12.5 10H19.5C21.433 10 23 11.567 23 13.5V18.5C23 20.433 21.433 22 19.5 22H12.5C10.567 22 9 20.433 9 18.5V13.5C9 11.567 10.567 10 12.5 10ZM12 13.5V18.5H20V13.5H12Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C5FF7"/>
        <stop offset="1" stopColor="#C362F6"/>
      </linearGradient>
    </defs>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('admin@sentimenlab.id');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  // 2. PASTIKAN BARIS INI ADA DI SINI (Di dalam Login, sebelum handleSubmit)
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginStatus(''); 

    const defaultEmail = 'admin@sentimenlab.id';
    const defaultPassword = 'admin1234';

    if (email === defaultEmail && password === defaultPassword) {
      setLoginStatus('success');
      console.log('Login berhasil! Mengarahkan ke Dashboard...');
      
      // 3. Sekarang baris ini sudah bisa bekerja
      navigate('/dashboard'); 
    } else {
      setLoginStatus('failure');
      console.error('Login gagal. Email atau kata sandi salah.');
    }
  };

  const handleDemoMode = () => {
    console.log('Mode demo - Melewati login.');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <Logo />
          <span className="company-name">SentimenLab</span>
        </div>

        <h1 className="login-title">Welcome</h1>
        <p className="login-subtitle">Masuk untuk mulai menganalisis sentimen berbasis aspek</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="admin@sentimenlab.id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="admin1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Masuk ke Dashboard
            <ArrowRightIcon />
          </button>
        </form>

        {loginStatus === 'success' && <p className="success-msg">Login Berhasil! (Pesan demo)</p>}
        {loginStatus === 'failure' && <p className="error-msg">Gagal. Kredensial Salah.</p>}

        <a href="#" className="demo-link" onClick={handleDemoMode}>
          Mode demo - Lewati login
        </a>
      </div>
    </div>
  );
};

export default Login;