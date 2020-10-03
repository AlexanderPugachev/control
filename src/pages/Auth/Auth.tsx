import React  from 'react';
import { Component } from './styles';
import { Text, Button } from '../../components';
import firebase from 'firebase/app';
import 'firebase/auth';

export const Auth: React.FC = () => {

  return (
    <>
      <Component>
        <Text>Sign in with Google for save your progress</Text>

        <Button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </Button>

      </Component>
    </>
  );
};