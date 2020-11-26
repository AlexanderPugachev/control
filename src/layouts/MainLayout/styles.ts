import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 100vw;
  overflow-x: scroll;

  background: ${p => p.theme.colors.main};
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  padding: ${p => p.theme.spacing([1])};
  box-sizing: border-box;
`;
