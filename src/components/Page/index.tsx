import React from 'react';

import { Container } from './styles'
import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            // 'Model Three',
            // 'Model Four',
            // 'Model Five',
            // 'Model Six',
            // 'Model Seven',
          ].map(model => (
            <ModelSection
              key={model}
              className="colored"
              modelName={model}
              overlayNode={
                <DefaultOverlayContent
                  label={model}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page;
