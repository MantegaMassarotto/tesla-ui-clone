import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { HiTruck } from 'react-icons/hi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import NaRodagemMotoristaApp from '../../../assets/images/narodagem-motorista.png';
import NaRodagemControle from '../../../assets/images/narodagem-controle.png';

import { Container, Heading, Content, Image, Description } from './styles';

interface IProps {
  label: string;
  description: string;
}

const SectionThree: React.FC<IProps> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Content>
        <Description>
          Substituindo o envelope e com uma interface simples, o motorista pode
          realizar os lançamentos das despesas, abastecimentos, notas fiscais e
          muito mais. Tudo isso através do aplicativo do Narodagem.
        </Description>
        <Image src={NaRodagemMotoristaApp} />
      </Content>
    </Container>
  );
};

export default SectionThree;
