import React from 'react';
import { AppHeader, Main } from './styles';
import Text from '../../components/Text/Text';

const MainLayout: React.FC  = ({children}) => {
  return (
    <Main>
      <AppHeader>

        <Text strong>Moneysibility</Text>

        <Text>Transactions</Text>

        <Text>Accounts</Text>

      </AppHeader>

      {children}
    </Main>
  );
};

export default MainLayout;