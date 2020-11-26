import React from 'react';
import { createPortal } from 'react-dom';
import ModalWindow from './ModalWindow/ModalWindow';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal: React.FC = ({ children }) => {
  return createPortal(<ModalWindow>{children}</ModalWindow>, modalRoot);
};
