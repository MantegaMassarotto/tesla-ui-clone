import React from 'react';
import Logo from '../../assets/images/logo.png';

import { HeaderWrapper, Content, DropboxLogo } from './styles';

const Header: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <HeaderWrapper>
      <Content>
        <h1>
          <DropboxLogo src={Logo} />
          <span>NaRodagem</span>
        </h1>
        <button onClick={handleToggle}>Área do usuário</button>
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
