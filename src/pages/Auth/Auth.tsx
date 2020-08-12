import React, { useEffect } from 'react';
import { Component } from './styles';
import Text from '../../components/Text/Text';

const Auth: React.FC = () => {
  const gapi = window.gapi;

  useEffect(() => {
    const _onInit = (auth2: never) => console.log('init OK', auth2);
    const _onError = (err: never) => console.log('error', err);

    gapi.load('auth2', function () {
      gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_API_ID
        })
        .then(_onInit, _onError);
    });
  });

  return (
    <>
      <Component>
        <Text>Это авторизация</Text>

        <div className="g-signin2" data-onsuccess="onSignIn"/>

      </Component>
    </>
  );
};

export default Auth;