import React from 'react';
import { Container } from './styles';

const ModalWindow: React.FC = ({children}) => {
  const headerHeight = document.getElementById('app-header')?.offsetHeight || 30;

  return (
    <Container headerHeight={headerHeight}>
      {children}
    </Container>
  );
};

export default ModalWindow;