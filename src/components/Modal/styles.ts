import styled from 'styled-components';

interface ContainerProps {
  top: number;
}

export const Container = styled.div<ContainerProps>`
  // position
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  //top: ${p => p.top}px;
  box-sizing: border-box;
  z-index: ${p => p.theme.zIndexes.modals};

  // style
  background-color: ${p => p.theme.colors.main};
  border-top: 4px double ${p => p.theme.colors.secondary};
  border-radius: 2% 2% 0 0;
  color: white;
  
  // children
  display: flex;
  flex-direction: column;
  
  & > :nth-child(n) {
    width: 100%;
    padding: ${p => p.theme.spacing([3, 3])};
    box-sizing: border-box;
  }

  // other
  overflow: hidden;
`;

export const ModalTitle = styled.div`
  ${p => p.theme.fonts.h2};
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContent = styled.div``;