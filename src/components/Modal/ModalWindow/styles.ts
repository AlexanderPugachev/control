import styled from 'styled-components';

interface ContainerProps {
  headerHeight: number
}

export const Container = styled.div<ContainerProps>`
  // position
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: ${p => p.headerHeight}px;
  box-sizing: border-box;
  z-index: 999;
  
  // style
  background-color: ${p => p.theme.colors.main};
  border-top: 4px double ${p => p.theme.colors.secondary};
  border-radius: 2% 2% 0 0;
  color: white;
  
  // other
  overflow: hidden;
`;