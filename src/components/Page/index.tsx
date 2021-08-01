import React from 'react';

import { Container } from './styles';
import { ModelsWrapper, ModelSection } from '../Model';
import SectionOne from '../OverlayContent/SectionOne';
import SectionTwo from '../OverlayContent/SectionTwo';
import SectionThree from '../OverlayContent/SectionThree';
import SectionFour from '../OverlayContent/SectionFour';
import SectionFive from '../OverlayContent/SectionFive';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            key={'Facilite a gestão dos fretes'}
            className="colored"
            modelName={'Facilite a gestão dos fretes'}
            overlayNode={
              <SectionOne
                label={'Facilite a gestão dos fretes'}
                description=""
              />
            }
          />
          <ModelSection
            key={'Digitalize a sua frota'}
            className="colored"
            modelName={'Digitalize a sua frota'}
            overlayNode={<SectionThree label={'Digitalize a sua frota'} description="" />}
          />
          <ModelSection
            key={'Gerencie os seus fretes de uma forma simples'}
            className="colored"
            modelName={'Gerencie os seus fretes de uma forma simples'}
            overlayNode={<SectionFive label={'Gerencie os seus fretes de uma forma simples'} description="" />}
          />
          <ModelSection
            key={'O que oferecemos?'}
            className="colored"
            modelName={'O que oferecemos?'}
            overlayNode={<SectionTwo label={'O que oferecemos?'} description="" />}
          />
          <ModelSection
            key={'Contato'}
            className="colored"
            modelName={'Contato'}
            overlayNode={
              <SectionFour
                label={'Contato'}
                description="Caso ficou interessado em saber mais, envie o seu contato que nossa equipe terá o prazer em atendê-lo ."
              />
            }
          />
        </div>
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
