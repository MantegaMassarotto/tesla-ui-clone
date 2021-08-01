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

const SectionFive: React.FC<IProps> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Content>
        <Image src={NaRodagemControle} />
        <Description>
          O NaRodagem surgiu para facilitar o acerto com os motoristas, e
          consequentemente o controle financeiro das transportadoras utilizando
          a tecnologia. Utilizando o NaRodagem a empresa tem um acompanhamento
          dos fretes e despesas do veículo em tempo real.
        </Description>
      </Content>
    </Container>
  );
};

export default SectionFive;
