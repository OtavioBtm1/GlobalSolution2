import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Logo from '../img/logo.png';

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')  
      .then(response => response.json())
      .then(data => {
        
        const userFromSession = sessionStorage.getItem('user');
        if (userFromSession) {
          const user = JSON.parse(userFromSession);
          setUserData(user);
        }
        // Ou se quiser pegar todos os usuários
        // setUserData(data); 
      })
      .catch(error => {
        console.error('Erro ao carregar os dados dos usuários:', error);
      });
  }, []);

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="form">
        <div className="logo-container">
          <img src={Logo} alt="Logo da MediCare" className="logo" />
        </div>
        <h3>MediCare</h3>
        <div className="content">
          <h1>Bem-vindo!</h1>
          {userData && (
            <p>Nome: {userData.name} Email: {userData.email}</p>
          )}
          <div className="links">
            <Link to="/" className="logout-btn">
              Logout
            </Link>
            <span className="divider">|</span>
            <Link to="/solutions" className="solutions-btn">
              Soluções
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
