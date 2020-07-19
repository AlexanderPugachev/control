import styled from 'styled-components';

export const AppHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  place-items: center;
  background: ${p => p.theme.colors.main};
  
  & > :nth-child(1n) {
    margin: ${p => p.theme.spacing(1, 2)};
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${p => p.theme.colors.main};
`;