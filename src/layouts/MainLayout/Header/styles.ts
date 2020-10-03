import styled from 'styled-components';
import { Button } from '../../../components';

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
interface MenuButtonProps {
  readonly selected: boolean
}

export const MenuButton = styled(Button)<MenuButtonProps>`  
  opacity:     ${p => p.selected ? 1 : .5};
  font-weight: ${p => p.selected ? 600 : 400};  
`;