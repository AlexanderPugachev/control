import React from 'react';
import { Main, Content } from './styles';
import Header from './Header/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Main>
      <Header/>

      <Content>
        {children}
      </Content>
    </Main>
  );
};

export default MainLayout;