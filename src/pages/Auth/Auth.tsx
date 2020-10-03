import React  from 'react';
import { Component } from './styles';
import { Text, Button } from '../../components';
import firebase from 'firebase/app';
import 'firebase/auth';

export const Auth: React.FC = () => {

  const signIn = async () => {

  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Component>
        <Text>Sign in with Google for save your progress</Text>

        <Button
          onClick={signIn}
        >Sign In with Google</Button>

        <Button
          onClick={signOut}
        >Sign Out</Button>

      </Component>
    </>
  );
};