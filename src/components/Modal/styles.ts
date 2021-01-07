import styled from 'styled-components';

export const Container = styled.div`
  // position
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 50vh;
  box-sizing: border-box;

  // style
  background-color: ${p => p.theme.colors.main};
  border-top: 4px double ${p => p.theme.colors.option};
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
  z-index: ${p => p.theme.zIndex.modals};
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContent = styled.div`
  z-index: ${p => p.theme.zIndex.modals};
`;

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${(p) => p.theme.zIndex.modalsWrap};
`;