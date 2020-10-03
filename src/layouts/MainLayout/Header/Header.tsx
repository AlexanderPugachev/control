import React from 'react';
import { AppHeader, MenuButton } from './styles';
import { Text } from '../../../components';
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../../routes/Routes';

export const Header: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  
  const handleLogout = () => {
    console.log('It\'s logout');
  };
  
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

      {pathname !== '/auth'
        ?
        <MenuButton
          onClick={() => history.push('/auth')}
          selected={pathname === '/auth'}
          size='small'
          view='link'
        >Login</MenuButton>
        :
        <MenuButton
          onClick={handleLogout}
          selected
          size='small'
          view='link'
        >Logout</MenuButton>
      }

    </AppHeader>
  );
};