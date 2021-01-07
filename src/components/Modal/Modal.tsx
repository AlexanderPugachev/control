import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { ModalContent, ModalTitle, Container, ModalWrap } from './styles';
import { commonActions } from '../../redux';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type ModalType = {
  title?: string
  modalId: number
}

export const Modal: React.FC<ModalType> = (
  {
    children,
    title,
    modalId
  },
) => {
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(commonActions.setModal({ visible: false, modalId }));
  };

  return createPortal(
    <Container>
      {title && <ModalTitle>{title}</ModalTitle>}

      <ModalContent>{children}</ModalContent>

      <ModalWrap onClick={closeDrawer} />
    </Container>,
    modalRoot);
};
