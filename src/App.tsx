import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider as StyledCompProvider } from 'styled-components';
import { mainTheme } from './theme/main';
import { Routes } from './routes/Routes';

// type Config = {
//   apiKey: string;
//   authDomain: string;
//   databaseURL: string;
//   projectId: string;
//   storageBucket: string;
//   messagingSenderId: string;
//   appId: string;
// }
//
// const config: Config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ?? '',
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? '',
//   databaseURL: process.env.REACT_APP_FIREBASE_DB_URL ?? '',
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ?? '',
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ?? '',
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ?? '',
//   appId: process.env.REACT_APP_FIREBASE_APP_ID ?? ''
// };

export const App: React.FC = () => {
  return (
    // <FirebaseAuthProvider firebase={firebase} {...config}>
    <ReduxProvider store={store}>
      <StyledCompProvider theme={mainTheme}>
        <Routes/>
      </StyledCompProvider>
    </ReduxProvider>
    // </FirebaseAuthProvider>
  );
};