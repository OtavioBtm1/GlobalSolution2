import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Logo from '../img/logoNoBg.png'; 

const Solution = () => {
  return (
    <div>
      <div className="logo-containers">
        <Link to="/home">
          <img src={Logo} alt="MediCare" className="logo" />
        </Link>
      </div>
      <div className="container">
        <div className="box">
          <h2>O que é o MediCare?</h2>
          <p>MediCare é uma plataforma inovadora projetada para simplificar a gestão de informações médicas. Nosso propósito é fornecer uma experiência digital integrada, unindo pacientes e profissionais da saúde em um ambiente acessível e eficiente. Esta solução visa centralizar e organizar dados médicos, garantindo o acesso simples e seguro às informações de saúde dos usuários.</p>
        </div>
        <div className="box">
          <h2>Funcionalidades </h2>
          <p>Centralização de Registros Médicos: O MediCare oferece um espaço centralizado para armazenar e gerenciar registros médicos completos</p>
          <p>Comunicação Direta com Profissionais de Saúde: A plataforma possibilita a comunicação direta e segura com médicos e especialistas</p>
          <p>Monitoramento Personalizado e Lembretes: O MediCare simplifica o acompanhamento da saúde</p>
        </div>
        <div className="box">
          <h2>Como Funciona:</h2>
          <p>O MediCare oferece uma interface amigável para os usuários criarem e gerenciarem seus perfis médicos de forma intuitiva</p>
          <p>A plataforma utiliza tecnologias avançadas para garantir a segurança e a privacidade dos dados</p>
          <p>Com recursos integrados de lembretes, mensagens e agendamento</p>
        </div>
      </div>
    </div>
  );
};

export default Solution;