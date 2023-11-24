import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated } from '../../routes/auth';
import Logo from '../img/logo.png';
import './style.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [userId, setUserId] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const authenticatedUser = isAuthenticated(email, senha);
  
    if (authenticatedUser) {
      console.log('Usuário autenticado:', authenticatedUser);
      sessionStorage.setItem('user', JSON.stringify(authenticatedUser));  
      navigate('/home');
    } else {
      console.log('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleClearStorage = () => {
    // Limpar sessionStorage
    sessionStorage.clear();
    console.log('Session Storage foi limpo.');
  
    // Verificar se há um ID fornecido
    if (userId) {
      // Deletar usuário da API usando o ID fornecido
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log('Usuário foi removido da API.');
          } else {
            console.error('Erro ao remover o usuário da API.');
          }
        })
        .catch((error) => {
          console.error('Erro ao conectar com a API:', error);
        });
    } else {
      console.log('Por favor, insira o ID do usuário para remover.');
    }
  };

  return (
    <body>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="Logo da MediCare" className="logo" />
        </div>

        <h3>Login</h3>

        <label htmlFor="username">Login</label>
        <input
          type="text"
          placeholder="Email"
          id="user"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          id="pwd"
          value={senha}
          onChange={handleSenhaChange}
        />

        <button type="submit">Log In</button>

        <div className="links">
          <Link to="/register" className="register-btn">
            Criar Conta
          </Link>
          {/* <input
            type="text"
            placeholder="ID do Usuário"
            value={userId}
            onChange={handleUserIdChange}
          />
          <button type="button" onClick={handleClearStorage}>
            Deletar Usuário
          </button> */}
        </div>
      </form>
    </body>
  );
};

export default Login;
