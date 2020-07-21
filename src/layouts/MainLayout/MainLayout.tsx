import React from 'react';
import { AppHeader, Main, MenuButton, Content } from './styles';
import Text from '../../components/Text/Text';
import { useHistory, useLocation } from 'react-router-dom';
import { header } from '../../routes';

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const pathname = useLocation().pathname;

  return (
    <Main>
      <AppHeader id="app-header">

        <Text size={2} strong>Moneysibility</Text>

        {header.map(({ key, path }) =>
          <MenuButton
            key={key}
            onClick={() => history.push(path)}
            selected={pathname === path}
            size="small"
            view="link"
          >{key[0].toUpperCase() + key.slice(1)}</MenuButton>
        )}

      </AppHeader>

      <Content>
        {children}
      </Content>
    </Main>
  );
};

export default MainLayout;