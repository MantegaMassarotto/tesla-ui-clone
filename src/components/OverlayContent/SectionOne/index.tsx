import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { HiTruck } from 'react-icons/hi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa'

import { Container, Heading, Content, Item } from './styles';

interface IProps {
  label: string;
  description: string;
}

const SectionOneOverlayContent: React.FC<IProps> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
      </Heading>
      <Content>
        <Item>
          <IoIosPaper fontSize={50} />
          <span>Diga adeus aos envelopes com a digitalização de todo o processo</span>
        </Item>
        <Item>
          <FaHandshake fontSize={50} />
          <span>Facilite o acerto dos motoristas e evite dor de cabeça</span>
        </Item>
        <Item>
          <HiTruck fontSize={50} />
          <span>Acompanhe os custos por veículo e média de combustível</span>
        </Item>
      </Content>
    </Container>
  );
};

export default SectionOneOverlayContent;
