import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const AppHeader = styled.header`
  height: fit-content;
  width: auto;
  max-width: inherit;
  overflow-x: scroll;
  padding: ${p => p.theme.spacing([3, 1])};
  
  display: flex;
  align-items: baseline;

  & > :nth-child(1n) {
    margin: ${p => p.theme.spacing([1, 2])};
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 100vw;
  overflow-x: scroll;
  
  background: ${p => p.theme.colors.main};
`;

interface MenuButtonProps {
  readonly selected: boolean
}

export const MenuButton = styled(Button)<MenuButtonProps>`  
  opacity:     ${p => p.selected ? 1 : .5};
  font-weight: ${p => p.selected ? 600 : 400};  
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  padding: ${p => p.theme.spacing([1])};
  box-sizing: border-box;
`;