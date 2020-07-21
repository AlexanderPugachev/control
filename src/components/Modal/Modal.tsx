import React from 'react';
import { createPortal } from 'react-dom';
import ModalWindow from './ModalWindow/ModalWindow';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: React.FC = ({ children }) => {
  // el: HTMLElement = document.createElement('div');
  //
  // componentDidMount(): void {
  //   modalRoot.appendChild(this.el);
  // }
  //
  // componentWillUnmount(): void {
  //   modalRoot.removeChild(this.el);
  // }

  // render (): React.ReactPortal {
  return createPortal(
    <ModalWindow>{children}</ModalWindow>,
    modalRoot
  );
  // }
};

export default Modal;