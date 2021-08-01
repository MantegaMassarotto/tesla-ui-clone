import React from 'react';

import { Container, Navigation, DropboxLogo, Form, Buttons } from './styles';

import Logo from '../../assets/images/logo.png';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo src={Logo} />
          <span>NaRodagem</span>
        </h1>
        {/* ✕ chacter in video description */}
        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Já é cliente do NaRodagem?</span>
        <span className="subtitle">Acesse aqui o NaRodagem Controle</span>
        <Buttons>
          <button onClick={() => window.open('https://narodagem-client.herokuapp.com/')}>
            Acessar
          </button>
        </Buttons>
        {/* <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span> */}
      </Form>
    </Container>
  );
};

export default MenuForm;
