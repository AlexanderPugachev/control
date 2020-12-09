import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as StyledCompProvider } from 'styled-components';
import { initDB } from 'react-indexed-db';
import { store } from './redux/store';
import { mainTheme } from './theme/main';
import { Routes } from './routes/Routes';
import { DBConfig } from './utils/database';

initDB(DBConfig);

export const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <StyledCompProvider theme={mainTheme}>
        <Routes />
      </StyledCompProvider>
    </ReduxProvider>
  );
};
