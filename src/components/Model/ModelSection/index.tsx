import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<IProps> = ({ modelName, overlayNode, children, ...props }) => {

  const { registerModel } = useModel(modelName);  

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  )
}

export default ModelSection;
