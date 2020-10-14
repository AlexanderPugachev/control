import React from 'react';
import { AppHeader, MenuButton } from './styles';
import { Text } from '../../../components';
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../../routes/Routes';

export const Header: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  
  return (
    <AppHeader id="app-header">

      <Text size={2} strong>Moneysibility</Text>

      {routes
        .filter(({ type }) => type === 'header')
        .map(({ key, path }) =>
          <MenuButton
            key={key}
            onClick={() => history.push(path)}
            selected={pathname === path}
            size="small"
            view="link"
          >{key[0].toUpperCase() + key.slice(1)}</MenuButton>
        )}

    </AppHeader>
  );
};