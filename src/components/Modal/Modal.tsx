import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, ModalTitle, Container } from './styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type ModalType = {
  title?: string
}

export const Modal: React.FC<ModalType> = (
  {
    children,
    title,
  },
) => {
  const headerHeight = document.getElementById('app-header')
    ?.offsetHeight || 30;

  return createPortal(
    <Container top={headerHeight}>

      {title && <ModalTitle>{title}</ModalTitle>}

      <ModalContent>{children}</ModalContent>

    </Container>,
    modalRoot);
};
