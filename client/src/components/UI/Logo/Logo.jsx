import React from 'react';
import './Logo.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Logo() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="logo-button"
    >
      <img src={logo} alt="Logo" className="logo-img" />
    </button>
  );
}

export default Logo;
