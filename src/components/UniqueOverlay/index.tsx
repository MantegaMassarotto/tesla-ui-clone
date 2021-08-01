import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import Header from '../Header';
import SideMenu from '../SideMenu';
import MenuForm from '../MenuForm';

import { Container, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header />
      <SideMenu>
        <MenuForm />
      </SideMenu>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <span>© 2021 - Todos os direitos reservados</span>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}


export default UniqueOverlay;