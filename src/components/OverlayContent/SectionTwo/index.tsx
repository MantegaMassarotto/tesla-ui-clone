import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { HiTruck } from 'react-icons/hi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import NaRodagemMotoristaApp from '../../../assets/images/narodagem-motorista.png';
import NaRodagemControle from '../../../assets/images/narodagem-controle.png';

import { Container, Heading, Content, Item, Image } from './styles';

interface IProps {
  label: string;
  description: string;
}

const SectionTwo: React.FC<IProps> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Content>
        <Item>
          <Image
            src={NaRodagemControle}
          />
          <h1>NaRodagem Controle</h1>
          <p>
            Acompanhe e gerencie os fretes através do Narodagem Controle.
            Através de uma interface simples, tenha o controle dos fretes de sua
            frota.
          </p>
        </Item>
        <Item>
          <Image src={NaRodagemMotoristaApp} />
          <h1>NaRodagem Motorista</h1>
          <p>
            Substituindo o envelope e com uma interface simples, o motorista
            pode realizar os lançamentos das despesas, abastecimentos, notas
            fiscais e muito mais.
          </p>
        </Item>
      </Content>
    </Container>
  );
};

export default SectionTwo;
